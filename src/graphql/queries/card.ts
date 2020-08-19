import { gql } from '@apollo/client';

export const asset = gql`
  fragment Asset on Asset {
    title
    description
    contentType
    fileName
    size
    url
    width
    height
  }
`;

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

export const getCard = gql`
  query GetCard {
    cardCollection(limit: 1) {
      items {
        ...Card
      }
    }
  }
  ${card}
`;
