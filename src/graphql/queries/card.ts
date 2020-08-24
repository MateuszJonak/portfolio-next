import { gql } from '@apollo/client';
import { asset } from './asset';

export const card = gql`
  fragment Card on Card {
    name
    avatar {
      ...Asset
    }
    role
  }
  ${asset}
`;

export const getCards = gql`
  query GetCards($limit: Int, $preview: Boolean) {
    cardCollection(limit: $limit, preview: $preview) {
      items {
        ...Card
      }
    }
  }
  ${card}
`;
