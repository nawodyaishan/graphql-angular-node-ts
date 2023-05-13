import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import {schema} from './schema';
import {root} from './resolver';

const app = express();
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}));

const port = 3000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}/graphql`));
