export default `
    type Mutation {
        # Sign a game bet
        signBet: SignBetPayload

        # Register a new user
        registerUser(input: RegisterUserInput!): User!

        # Send message to the chat
        sendMessage(input: SendMessageInput!): Message!
    }
`;
