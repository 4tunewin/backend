import { ApolloServer, graphql } from 'apollo-server';
import { promisify } from 'bluebird';

import { typeDefs, resolvers } from './schema';
import { web3, logger, redis } from './providers';
import config from './config';

// Init server with provided type definitions and their resolvers
const server = new ApolloServer({
    typeDefs,
    resolvers,
    onHealthCheck: () => {
        return Promise.resolve();
    },
    subscriptions: {
        // Track online users
        onConnect: () => {
            redis
                .pipeline()
                .incr('online')
                .publish('online', 1)
                .exec();
        },
        onDisconnect: () => {
            redis
                .pipeline()
                .decr('online')
                .publish('online', 1)
                .exec();
        },
    },
});

// Run server on specified port
(async () => {
    const { url, subscriptionsUrl } = await server.listen(config.server.port);
    const account = await web3.eth.defaultAccount;

    setTimeout(() => {
        logger.info(
            { secretSigner: account, rpc: config.network.uri },
            `🚀 Server ready at ${url}`,
        );
        logger.info(
            `🏥 Try your health check at: ${url}.well-known/apollo/server-health`,
        );
        logger.info(`🚀 Subscriptions ready at ${subscriptionsUrl}`);
    }, 1000);
})();
