import { getFragmentData } from '../gql/fragment-masking';
import {
  CvFragmentDoc,
  GetCvDocument,
  GetCvQuery,
  GetCvQueryVariables,
} from '../gql/graphql';
import { gqlClient } from '../lib/gqlClient';
import { getCard } from './getCard';

export const getCV = async () => {
  const card = await getCard();
  const id = card?.cv?.sys?.id;
  if (!id) {
    return null;
  }
  const data = await gqlClient.request<GetCvQuery, GetCvQueryVariables>(
    GetCvDocument,
    {
      id,
    },
  );

  const cv = getFragmentData(CvFragmentDoc, data?.cv);

  return cv;
};
