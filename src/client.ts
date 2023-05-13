import {ApolloClient, InMemoryCache, gql} from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache()
});

// Mutation
client.mutate({
    mutation: gql`
    mutation {
      setUser(name: "Alice", age: 30, address: "123 Main St") {
        id
        name
        age
        address
      }
    }
  `,
}).then(result => console.log(result));

// Query
client.query({
    query: gql`
    query {
      getUser(id: "1") {
        id
        name
        age
        address
      }
    }
  `,
}).then(result => console.log(result));
