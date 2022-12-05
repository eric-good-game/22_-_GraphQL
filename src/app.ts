import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import './confg/mongoose-config';
import { root, schema } from './graphql/schema';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use("/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
);


export default app;