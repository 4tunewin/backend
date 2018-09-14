import { ApolloServer, graphql } from 'apollo-server';
import { typeDefs, resolvers } from './schema';

// Define port to listen for
const LISTEN_PORT = process.env.PORT || 8080;

// Init server with provided type definitions and their resolvers
const server = new ApolloServer({ typeDefs, resolvers });

// Run server on specified port
server.listen(LISTEN_PORT).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
