import {ApolloClient, InMemoryCache, gql} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

export const charactersQuery = gql`
  query GetCharactersList {
    characters {
      results {
        id
        name
      }
    }
  }
`;

export const characterQuery = gql`
  query GetCharacterData($id: ID!) {
    character(id: $id) {
      id
      name
      image
    }
  }
`;

export default client;
