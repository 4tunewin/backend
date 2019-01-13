// Development environment configuration
export default {
    // Apollo server settings
    server: {
        port: 8080,
    },
    // Ethereum network settings
    network: {
        uri: 'ws://kovan.4tune.win:9549',
        provider: 'ws',
    },
    // Redis related settibgs
    redis: {
        host: 'redis',
        port: 6379,
    },
};
