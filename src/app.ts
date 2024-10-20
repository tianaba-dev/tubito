require("dotenv").config()

import { ApolloServer } from '@apollo/server';

import { startStandaloneServer } from '@apollo/server/standalone';

import { mergedGQLSchema } from "./schema";
import { resolvers } from "./resolvers";

const PORT = parseInt(process.env.PORT as string) || 3000

const server = new ApolloServer({
    typeDefs : mergedGQLSchema,
    resolvers : resolvers,
    introspection : true
  });

const start = async () => {
    try {
        startStandaloneServer(server, { listen: { port: PORT } });
        console.log(`Server is listening on port ${PORT}`)
    } catch (error) {
        console.log(error)
    }
}

start()