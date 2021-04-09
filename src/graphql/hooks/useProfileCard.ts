import { useRouter } from 'next/router';
import { useGetCardsQuery } from '../queries/card.generated';

export const useProfileCard = () => {
  const { isPreview } = useRouter();
  const { data } = useGetCardsQuery({
    variables: { limit: 1, preview: isPreview },
  });
  const card = data?.cardCollection?.items[0];

  return card;
};
