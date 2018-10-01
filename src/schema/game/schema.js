const Game = `
    # Played game result
    type Game {
        # Unique ID of the game
        id: ID!

        # The game modulo
        modulo: Number!
        
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
        block: String!

        # The transaction hash of reveal
        transaction: String!
    }
`;

export default () => [Game, Reveal];
