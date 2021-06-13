import {ApolloClient, InMemoryCache, gql} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

export const charactersByPageQuery = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      info {
        pages
        prev
        next
      }
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
      status
      species
      gender
      origin {
        name
      }
    }
  }
`;

export default client;
