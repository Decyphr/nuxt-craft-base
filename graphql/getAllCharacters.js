import gql from "graphql-tag";

export const GET_ALL_CHARACTERS = gql`
  query getAllCharacters {
    characters {
      results {
        id
        name
        image
        status
        species
      }
    }
  }
`;
