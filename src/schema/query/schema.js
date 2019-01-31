export default `
    type Query {
        # Return list of played games with specified modulo
        history(
            # Game modulo
            modulo: Int,
            # Limit number of results
            limit: Int
        ): [Game]!

        # Return games statistics
        stats: Stats!

        # Request user details for provided address
        user(
            # Wallet address
            address: String!
        ): User

        # Returns list of messages
        messages: [Message]!
    }
`;
