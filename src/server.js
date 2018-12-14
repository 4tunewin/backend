import { ApolloServer, graphql } from 'apollo-server';
import { promisify } from 'bluebird';

import { typeDefs, resolvers } from './schema';
import { web3, logger } from './providers';
import config from './config';

// Init server with provided type definitions and their resolvers
const server = new ApolloServer({ typeDefs, resolvers });

const getSecretSigner = async () => {
    const getAccounts = promisify(web3.eth.getAccounts, { context: web3.eth });
    const accounts = await getAccounts();

    return accounts[0];
};

// Run server on specified port
(async () => {
    const { url, subscriptionsUrl } = await server.listen(config.server.port);

    const secretSigner = await getSecretSigner();

    setTimeout(() => {
        logger.info(
            { secretSigner, rpc: config.network.uri },
            `🚀 Server ready at ${url}`,
        );
        logger.info(`🚀 Subscriptions ready at ${subscriptionsUrl}`);
    }, 1000);
})();
