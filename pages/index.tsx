import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import styled from '@emotion/styled';
import { ProfileCard } from '../src/components/ProfileCard';
import { client } from '../lib/apolloClient';
import { getCards } from '../src/graphql/queries/card';
import {
  GetCardsQuery,
  GetCardsQueryVariables,
  CardFragment,
} from '../src/graphql/queries/card.generated';
import { AlertPreview } from '../src/components/AlertPreview';

type Props = { card: CardFragment | null; preview: boolean };

const Index: NextPage<Props> = ({ card, preview }) => {
  const pageTitle = card?.name && card?.role && `${card.name} - ${card.role}`;
  return (
    <>
      <Head>
        <title>{pageTitle || ''}</title>
        <meta name="description" content="Curriculum vitae" />
      </Head>
      <BackgroundWrap>
        <Image
          alt="black hole"
          src="/bg.jpeg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </BackgroundWrap>
      <ContainerFullHeight>
        <Box
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {card && <ProfileCard card={card} />}
        </Box>
      </ContainerFullHeight>
      {preview && <AlertPreview />}
    </>
  );
};
const { CONTENTFUL_PREVIEW_ACCESS_TOKEN } = process.env;

const getContext = (preview?: boolean) => {
  if (!preview) {
    return undefined;
  }
  return {
    context: {
      headers: {
        Authorization: `Bearer ${CONTENTFUL_PREVIEW_ACCESS_TOKEN}`,
      },
    },
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({
  preview = false,
}) => {
  const { data } = await client.query<GetCardsQuery, GetCardsQueryVariables>({
    query: getCards,
    variables: {
      limit: 1,
      preview,
    },
    ...getContext(preview),
  });
  const card = data.cardCollection?.items[0];

  return {
    props: {
      card: card || null,
      preview,
    },
    revalidate: 1,
  };
};

const ContainerFullHeight = styled(Container)`
  height: 100%;
`;
const BackgroundWrap = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -2;
`;

export default Index;
