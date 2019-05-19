// Development environment configuration
export default {
    // Apollo server settings
    server: {
        port: 8080,
    },
    // Ethereum network settings
    network: {
        uri: 'https://rinkeby.infura.io/v3/<SECRET_KEY>',
        provider: 'http',
    },
    // Redis related settibgs
    redis: {
        host: 'localhost',
        port: 6379,
    },
};
