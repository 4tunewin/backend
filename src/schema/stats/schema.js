const Stats = `
    # Games statistics
    type Stats {
        wagers: StatsWagers!
        winners: [StatsWinners]!
    }
`;

const StatsWagers = `
    # Wagers statistic
    type StatsWagers {
        bets: Int!
        amount: String!
    }
`;

const StatsWinners = `
    # Winners statistics
    type StatsWinners {
        address: String!
        amount: String!
    }
`;

export default () => [Stats, StatsWagers, StatsWinners];
