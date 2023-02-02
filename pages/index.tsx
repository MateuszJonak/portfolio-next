import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import { Profile } from '../src/components/Profile';
import { initializeApollo, addApolloState } from '../lib/apolloClient';
import {
  GetCardsDocument,
  GetCardsQuery,
  GetCardsQueryVariables,
} from '../src/gql/graphql';
import { AlertPreview } from '../src/components/AlertPreview';
import bgPic from '../public/bg.jpeg';
import { useProfileCardFragment } from '../src/hooks/useProfileCardFragment';

const Index: NextPage = () => {
  const card = useProfileCardFragment();
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
          src={bgPic}
          sizes="100vw"
          fill
          style={{ objectFit: 'cover' }}
          quality={80}
          placeholder="blur"
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
    query: GetCardsDocument,
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
