/**
 * Resolver for ECDSA signature
 * https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm
 */
export const Signature = {
    r: (root, args, context) => {
        return '0x' + root.substr(2, 64);
    },
    s: (root, args, context) => {
        return '0x' + root.substr(66, 64);
    },
    v: (root, args, context) => {
        return (parseInt(root.substr(130, 2), 10) + 27).toString(16);
    },
};
