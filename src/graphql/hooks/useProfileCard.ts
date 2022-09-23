import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { GetCardsDocument } from '../queries/card.generated';

export const useProfileCard = () => {
  const { isPreview } = useRouter();
  const { data } = useQuery(GetCardsDocument, {
    variables: { limit: 1, preview: isPreview },
  });
  const card = data?.cardCollection?.items[0];

  return card;
};
