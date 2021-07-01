import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import styled from '@emotion/styled';
import { Profile } from '../src/components/Profile';
import { initializeApollo, addApolloState } from '../lib/apolloClient';
import { getCards } from '../src/graphql/queries/card';
import {
  GetCardsQuery,
  GetCardsQueryVariables,
} from '../src/graphql/queries/card.generated';
import { AlertPreview } from '../src/components/AlertPreview';
import { useProfileCard } from '../src/graphql/hooks/useProfileCard';

const Index: NextPage = () => {
  const card = useProfileCard();
  const { isPreview } = useRouter();
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
          quality={80}
        />
      </BackgroundWrap>
      <Container sx={{ height: '100%' }}>
        <Box
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
        >
          <Profile />
        </Box>
      </Container>
      {isPreview && <AlertPreview />}
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const apolloClient = initializeApollo({ preview });
  await apolloClient.query<GetCardsQuery, GetCardsQueryVariables>({
    query: getCards,
    variables: {
      limit: 1,
      preview,
    },
  });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  });
};

const BackgroundWrap = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -2;
`;

export default Index;
