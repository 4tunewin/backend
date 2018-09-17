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
    secretSigner: '0xbb5a6a489648143c13fd812d3bae7d000de12f9f',
};
