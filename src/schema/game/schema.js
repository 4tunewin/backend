const GameStatus = `
    # Played game status
    enum GameStatus {
        SUCCESS
        FAIL
    }
`;

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
        payment: String

        # Jackpot issued to gambler
        jackpotPayment: String

        # Game status
        status: GameStatus!

        # Signifies if game bet was refunded
        # NOTE: check error for details
        refunded: Boolean

        # Describe reason why current game has failed processing
        error: String
    }
`;

const Reveal = `
    type Reveal {
        # Secret number issues by croupier for the game
        secret: String!

        # The block hash of reveal
        blockHash: String

        # The transaction hash of reveal
        transactionHash: String
    }
`;

export default () => [Game, GameStatus, Reveal];
