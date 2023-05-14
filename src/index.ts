import express from 'express';
import {graphqlHTTP} from "express-graphql";
import {schema, root} from './routes/userRoutes';
import cors from 'cors';

const app = express();

// Use cors middleware and allow all origins
app.use(cors());


app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
