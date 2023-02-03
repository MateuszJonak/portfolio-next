import { graphql } from '../../gql';
import { asset } from './asset';

export const cv = graphql(`
  fragment CV on Cv {
    name
    role
    photo {
      ...Asset
    }
    dateOfBirth
    age
    gender
  }
  ${asset}
`);

export const getCV = graphql(`
  query GetCV($id: String!, $preview: Boolean) {
    cv(id: $id, preview: $preview) {
      ...CV
    }
  }
  ${cv}
`);
