import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  NormalizedCacheObject,
} from '@apollo/client';
import deepMerge from 'deepmerge';
import equals from 'ramda/es/equals';
import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { isBrowser } from '../src/misc/util';

const contentfulSpaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const contentfulAccessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const contentfulPreviewAccessToken =
  process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN;

let apolloClient: ApolloClient<NormalizedCacheObject>;

export const createApolloClient = ({ preview = false }: { preview: boolean }) =>
  new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createHttpLink({
      uri: `https://graphql.contentful.com/content/v1/spaces/${contentfulSpaceId}`,
      credentials: 'same-origin',
      headers: {
        Authorization: `Bearer ${
          preview ? contentfulPreviewAccessToken : contentfulAccessToken
        }`,
      },
    }),
    cache: new InMemoryCache(),
  });

export function initializeApollo({
  initialState = null,
  preview = false,
}: {
  initialState?: NormalizedCacheObject | null;
  preview?: boolean;
}) {
  const _apolloClient = apolloClient ?? createApolloClient({ preview });

  if (initialState) {
    const existingCache = _apolloClient.extract();

    const data = deepMerge(initialState, existingCache, {
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !equals(d, s)),
        ),
      ],
    });

    _apolloClient.cache.restore(data);
  }

  if (!isBrowser) return _apolloClient;
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}
export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

export const addApolloState = <T extends { props?: { [key: string]: any } }>(
  client: ApolloClient<NormalizedCacheObject>,
  pageProps: T,
): T => {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
};

export const useApollo = (props: { [key: string]: any }) => {
  const { isPreview } = useRouter();
  const state = props[APOLLO_STATE_PROP_NAME];

  const store = useMemo(
    () => initializeApollo({ initialState: state, preview: isPreview }),
    [state, isPreview],
  );
  return store;
};
