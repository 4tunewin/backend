const Bet = `
    # Game bet entity
    type Bet {
        # Gambler address
        gambler: String!

        # Bet placed amount in wei
        amount: String!

        # The block hash of the placed bet
        blockHash: String!

        # Bet mask
        mask: Int!

        # Keccak256 hash of some secret "reveal" random number
        commit: String!

        # Game modulo
        modulo: Int!

        # Block number of bet transaction
        blockNumber: Int!

        # The transaction hash of placed bet
        transactionHash: String!
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

        # Current gas price in wei
        gasPrice: String!
    }
`;

export default () => [Bet, SignBetPayload];
