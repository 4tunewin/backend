const Stats = `
    # Games statistics
    type Stats {
        wagers: StatsWagers!
        winners: [StatsWinners]!
        jackpotWinner: JackpotWinner
        online: Int!
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

const JackpotWinner = `
    type JackpotWinner {
        beneficiary: String!
        amount: String!
        transactionHash: String!
    }
`;

export default () => [Stats, StatsWagers, StatsWinners, JackpotWinner];
