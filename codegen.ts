import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: [
    {
      [`https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`]:
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
          },
        },
    },
  ],
  documents: ['src/api/*.ts'],
  ignoreNoDocuments: true, // for better experience with the watcher
  hooks: { afterOneFileWrite: ['next lint --fix --file'] },
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
