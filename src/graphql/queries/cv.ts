import { gql } from '@apollo/client';
import { asset } from './asset';

export const cv = gql`
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
`;
