const Message = `
    type Message {
        id: ID!
        author: User!
        text: String!
        createdAt: String!
    }
`;

const SendMessageInput = `
    input SendMessageInput {
        from: String!
        message: String!
    }
`;

export default () => [Message, SendMessageInput];
