export default `
    type Subscription {
        # Played game
        game(
            # Game modulo
            modulo: Int
        ): Game

        # Games statistics
        stats: Stats
    }
`;
