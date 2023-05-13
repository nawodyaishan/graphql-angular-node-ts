import {buildSchema} from 'graphql';
import * as userController from '../controllers/userController';

export const schema = buildSchema(`
    type User {
        id: ID!
        name: String!
        age: Int!
        address: String!
    }

    type Query {
        getUser(id: String): User
    }

    type Mutation {
        setUser(name: String!, age: Int!, address: String!): User
    }
`);

export const root = {
    getUser: userController.getUser,
    setUser: userController.setUser
};
