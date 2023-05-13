import {buildSchema} from 'graphql';

export const schema = buildSchema(`
  type User {
    id: ID!
    name: String!
    age: Int!
    address: String!
  }

  type Query {
    getUser(id: ID!): User
  }

  type Mutation {
    setUser(name: String!, age: Int!, address: String!): User
  }
`);
