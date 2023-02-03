import { graphql } from '../../gql';
import { asset } from './asset';

export const card = graphql(`
  fragment Card on Card {
    name
    avatar {
      ...Asset
    }
    role
    cv {
      sys {
        id
      }
    }
  }
  ${asset}
`);

export const getCards = graphql(`
  query GetCards($limit: Int, $preview: Boolean) {
    cardCollection(limit: $limit, preview: $preview) {
      items {
        ...Card
      }
    }
  }
  ${card}
`);
