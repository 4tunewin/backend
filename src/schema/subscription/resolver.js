import { PubSub } from 'apollo-server';
import { redisSub } from '../../providers';

const pubsub = new PubSub();

redisSub.subscribe('game', 'winner', 'jackpotWinner');
redisSub.on('message', (channel, message) => {
    switch (channel) {
        case 'game':
            const game = JSON.parse(message);
            pubsub.publish('GAME', { game });
            pubsub.publish('STATS', { stats: {} });
            break;
        case 'jackpotWinner':
            pubsub.publish('STATS', { stats: {} });
            break;
        default:
            break;
    }
});

export const Subscription = {
    game: {
        subscribe: () => pubsub.asyncIterator(['GAME']),
    },
    stats: {
        subscribe: () => pubsub.asyncIterator(['STATS']),
    },
};
