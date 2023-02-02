import { NextApiHandler } from 'next';
import { initializeApollo } from '../../lib/apolloClient';
import {
  GetCardsDocument,
  GetCardsQuery,
  GetCardsQueryVariables,
} from '../../src/gql/graphql';

const preview: NextApiHandler = async (req, res) => {
  const { secret, id } = req.query;

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !id) {
    return res.status(401).json({ message: 'Invalid token' });
  }
  const apolloClient = initializeApollo({ preview: true });

  const { data } = await apolloClient.query<
    GetCardsQuery,
    GetCardsQueryVariables
  >({
    query: GetCardsDocument,
    variables: {
      limit: 1,
      preview: true,
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
};

export default preview;
