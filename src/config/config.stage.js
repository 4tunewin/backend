// Development environment configuration
export default {
    // Apollo server settings
    server: {
        port: 8080,
    },
    // Ethereum network settings
    network: {
        uri: 'http://54.85.207.4:9545',
        provider: 'privateKey',
    },
    // Redis related settibgs
    redis: {
        host: 'localhost',
        port: 6379,
    },
};
