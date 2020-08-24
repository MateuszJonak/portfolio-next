import { client } from '../../lib/apolloClient';
import { getCards } from '../../src/graphql/queries/card';
import {
  GetCardsQuery,
  GetCardsQueryVariables,
} from '../../src/graphql/queries/card.generated';

const { CONTENTFUL_PREVIEW_ACCESS_TOKEN } = process.env;
export default async function preview(req, res) {
  const { secret, id } = req.query;

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !id) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  const { data } = await client.query<GetCardsQuery, GetCardsQueryVariables>({
    query: getCards,
    variables: {
      preview: true,
    },
    context: {
      headers: {
        Authorization: `Bearer ${CONTENTFUL_PREVIEW_ACCESS_TOKEN}`,
      },
    },
  });

  const card = data.cardCollection?.items[0];

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!card) {
    return res.status(401).json({ message: "Preview doesn't exists" });
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({ id });

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  // res.writeHead(307, { Location: `/posts/${post.slug}` })
  const url = `/`;
  res.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
    <script>window.location.href = '${url}'</script>
    </head>`,
  );
  res.end();
}
