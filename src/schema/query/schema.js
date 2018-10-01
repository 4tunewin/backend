export default `
    type Query {
        # Return list of played games with specified modulo
        history(modulo: Number): [Game]!
    }
`;
