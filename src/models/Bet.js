import Mongoose, { Schema } from 'mongoose';

// Game bet schema
const BetSchema = new Schema({
    // Current state of the bet
    status: {
        type: String,
        enum: ['PENDING', 'PLACED', 'PAID'],
        default: 'PENDING',
    },
    // Wager amount in wei
    amount: {
        type: Number,
    },
    // Modulo of a game
    modulo: {
        type: Number,
    },
    // Number of winning outcomes, used to compute winning payment
    rollUnder: {
        type: Number,
    },
    // Last block the bet is valid
    lastBlockNumber: {
        type: Number,
    },
    // Block number of placeBet tx
    placeBlockNumber: {
        type: Number,
    },
    // Bit mask represnting winning bet outcomes
    mask: {
        type: Number,
    },
    // Address of a gambler, used to pay winning bets
    gambler: {
        type: String,
        required: true,
    },
    // Secret random number
    commit: {
        type: String,
        required: true,
    },
    // Keccak256 hash of secret random number
    commitHash: {
        type: String,
        required: true,
    },
    // ECDSA signature
    signature: {
        type: String,
        required: true,
    },
    // Amount paid out in wei
    payment: {
        type: Number,
    },
    // Jackpot paid out in wei
    jackpotPayment: {
        type: Number,
    },
    // Date when the record was created
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Create indexes
BetSchema.index({ commitHash: 1 });
BetSchema.index({ status: 1, createdAt: -1 });

const BetModel = Mongoose.model('bet', BetSchema);

export { BetSchema, BetModel };
