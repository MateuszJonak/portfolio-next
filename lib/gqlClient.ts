import { GraphQLClient } from 'graphql-request';

const contentfulSpaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const contentfulAccessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const contentfulPreviewAccessToken =
  process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN;

export const initGQLClient = ({ preview = false }: { preview: boolean }) =>
  new GraphQLClient(
    `https://graphql.contentful.com/content/v1/spaces/${contentfulSpaceId}`,
    {
      fetch,
      headers: {
        Authorization: `Bearer ${
          preview ? contentfulPreviewAccessToken : contentfulAccessToken
        }`,
      },
    },
  );

export const gqlClient = initGQLClient({ preview: false });
