import { getFragmentData } from '../gql/fragment-masking';
import {
  CardFragmentDoc,
  GetCardsDocument,
  GetCardsQuery,
  GetCardsQueryVariables,
} from '../gql/graphql';
import { gqlClient } from '../lib/gqlClient';

export const getCard = async () => {
  const data = await gqlClient.request<GetCardsQuery, GetCardsQueryVariables>(
    GetCardsDocument,
    {
      limit: 1,
    },
  );
  const card = getFragmentData(CardFragmentDoc, data?.cardCollection?.items[0]);

  return card;
};
