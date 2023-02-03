import { graphql } from '../../gql';

export const asset = graphql(`
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
`);
