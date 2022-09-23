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
    expertise
    knowledge
    basic
    languages
    professionalExperienceCollection {
      items {
        title
        company
        startDate
        endDate
        description
      }
    }
    skills
    educationCollection {
      items {
        startDate
        endDate
        school
        title
        studyField
      }
    }
    interestsCollection {
      items {
        name
        icon {
          ...Asset
        }
      }
    }
  }
  ${asset}
`;

export const getCV = gql`
  query GetCV($id: String!, $preview: Boolean) {
    cv(id: $id, preview: $preview) {
      ...CV
    }
  }
  ${cv}
`;
