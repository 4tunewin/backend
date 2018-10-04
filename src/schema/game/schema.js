const Game = `
    # Played game result
    type Game {
        # Unique ID of the game
        id: ID!
        
        # Placed bet for the game
        bet: Bet!

        # Game reveal result
        reveal: Reveal!

        # Payment issued to gambler
        payment: String!

        # Jackpot issued to gambler
        jackpotPayment: String!
    }
`;

const Reveal = `
    type Reveal {
        # Secret number issues by croupier for the game
        reveal: String!

        # The block hash of reveal
        blockHash: String!

        # The transaction hash of reveal
        transactionHash: String!
    }
`;

export default () => [Game, Reveal];
