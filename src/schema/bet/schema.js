const SignBetInput = `
    # An input for game signature
    input SignBetInput {
        # Gambler address
        address: String

        # Network ID
        network: Int!
    }
`;

const SignBetPayload = `
    # A payload for game signature
    type SignBetPayload {
        # Keccak256 hash of some secret "reveal" random number
        commit: String!

        # The block where "commit" is still considered valid
        commitLastBlock: Int!
                
        # ECDSA signature of (commitLastBlock, commit)
        signature: Signature!
    }
`;

export default () => [SignBetInput, SignBetPayload];
