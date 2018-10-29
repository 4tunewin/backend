export default `
    type Subscription {
        # Played game
        game: Game

        # Games statistics
        wagers: StatsWagers
        winners: StatsWinners
    }
`;
