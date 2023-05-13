import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import {buildSchema} from 'graphql';

// GraphQL schema
const schema = buildSchema(`
    type User {
        name: String
        age: Int
        address: String
    }

    type Query {
        getUser(id: String): User
    }

    type Mutation {
        setUser(name: String, age: Int, address: String): User
    }
`);


// Mocked data
const users = [
    {
        id: '1',
        name: 'John Doe',
        age: 20,
        address: '123 Street'
    },
    {
        id: '2',
        name: 'John Cena',
        age: 22,
        address: '123 SS'
    }, {
        id: '3',
        name: 'Fena DDDoe',
        age: 23,
        address: '123 StrDDeet'
    },
];

const root = {
    getUser: ({id}: { id: string }) => {
        return users.find(user => user.id === id);
    },
    setUser: ({name, age, address}: { name: string, age: number, address: string }) => {
        const newUser = {
            id: (users.length + 1).toString(), // Generate a new id
            name,
            age,
            address
        };
        users.push(newUser);
        return newUser;
    }
};


// Create an express server and a GraphQL endpoint
const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));
