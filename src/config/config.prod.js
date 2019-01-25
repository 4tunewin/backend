// Development environment configuration
export default {
    // Apollo server settings
    server: {
        port: 8080,
    },
    // Ethereum network settings
    network: {
        uri: 'https://mainnet.infura.io/v3/1f972bfec78a47be89e68ca2dd70065c',
        provider: 'http',
    },
    // Redis related settibgs
    redis: {
        host: 'redis',
        port: 6379,
    },
};
