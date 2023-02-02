import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useFragment } from '../gql/fragment-masking';
import { CardFragmentDoc, GetCardsDocument } from '../gql/graphql';

export const useProfileCardFragment = () => {
  const { isPreview } = useRouter();
  const { data } = useQuery(GetCardsDocument, {
    variables: { limit: 1, preview: isPreview },
  });
  const card = useFragment(CardFragmentDoc, data?.cardCollection?.items[0]);

  return card;
};
