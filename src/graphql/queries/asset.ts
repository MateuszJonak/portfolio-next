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
