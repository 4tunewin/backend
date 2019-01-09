// Development environment configuration
export default {
    // Apollo server settings
    server: {
        port: 8080,
    },
    // Ethereum network settings
    network: {
        uri: 'http://frontier.4tune.win:8545',
        provider: 'privateKey',
    },
    // Redis related settibgs
    redis: {
        host: 'redis.4tune.win',
        port: 6379,
    },
};
