import { getCard } from '../api/getCard';

const getPageTitle = async () => {
  const card = await getCard();
  return card?.name && card?.role && `${card.name} - ${card.role}`;
};

export default async function Head() {
  const pageTitle = await getPageTitle();
  return (
    <>
      <title>{pageTitle || ''}</title>
      <meta name="description" content="Curriculum vitae" />
    </>
  );
}
