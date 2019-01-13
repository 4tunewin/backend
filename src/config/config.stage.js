// Development environment configuration
export default {
    // Apollo server settings
    server: {
        port: 8080,
    },
    // Ethereum network settings
    network: {
        uri: 'wss://kovan.infura.io/ws',
        provider: 'ws',
    },
    // Redis related settibgs
    redis: {
        host: 'localhost',
        port: 6379,
    },
};
