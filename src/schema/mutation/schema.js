export default `
    type Mutation {
        # Sign a game bet
        signBet(input: SignBetInput!): SignBetPayload
    }
`;
