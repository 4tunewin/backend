const User = `
    type User {
        # Unique user ID (same as wallet address)
        id: String!

        # Username assigned to current user
        username: String!

        # Assigned wallet address
        address: String!
    }
`;

const RegisterUserInput = `
    input RegisterUserInput {
        # User's wallet address
        address: String!

        # Chosen username
        username: String!
    }
`;

export default () => [User, RegisterUserInput];
