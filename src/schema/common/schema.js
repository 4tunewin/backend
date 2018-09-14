const Signature = `
    # ECDSA signature
    type Signature {
        r: String!
        s: String!
        v: String!
    }
`;

export default () => [Signature];
