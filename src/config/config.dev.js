// Development environment configuration
export default {
    // Apollo server settings
    server: {
        port: 8080,
    },
    // Ethereum network settings
    network: {
        uri: 'http://localhost:8545',
    },
    // The address corresponding to a private key used to sign placeBet commits.
    secretSigner: '0x3397CdeF1501B1DA81e00eB9685E75B5e7DcE231',
    // Redis related settibgs
    redis: {
        host: 'localhost',
        port: 6379,
    },
};
