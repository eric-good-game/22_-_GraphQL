import { buildSchema } from "graphql";
import * as manga from './manga'


export const schema = buildSchema(`
    type Query {
        hello: String
    }
    type Mutation {
        hello: String
    }
    ${manga.types}
`);

export const root = {
    ...manga.resolvers,
    hello: () => {
        return 'Hello world!';
    }
};