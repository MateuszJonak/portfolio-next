import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { styled } from '../src/theme';
import { ProfileCard } from '../src/components/ProfileCard';
import { client } from '../lib/apolloClient';
import { getCard } from '../src/graphql/queries/card';
import {
  GetCardQuery,
  CardFragment,
} from '../src/graphql/queries/card.generated';

type Props = { card?: CardFragment };

const Index: NextPage<Props> = ({ card }) => {
  return (
    <>
      <Head>
        <title>{card?.name}</title>
      </Head>
      <ContainerFullHeight>
        <Box
          height="100vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {card && <ProfileCard card={card} />}
        </Box>
      </ContainerFullHeight>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { data } = await client.query<GetCardQuery>({
    query: getCard,
  });

  return {
    props: {
      card: data.cardCollection.items[0],
    },
    revalidate: 1,
  };
};

const ContainerFullHeight = styled(Container)`
  height: 100vh;
`;

export default Index;
