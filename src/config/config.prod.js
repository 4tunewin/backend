// Development environment configuration
export default {
    // Apollo server settings
    server: {
        port: 8080,
    },
    // Ethereum network settings
    network: {
        uri: 'https://mainnet.infura.io/v3/<SECRET_KEY>',
        provider: 'http',
    },
    // Redis related settibgs
    redis: {
        host: 'redis',
        port: 6379,
    },
};
