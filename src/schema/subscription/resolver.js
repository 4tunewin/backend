import { PubSub } from 'apollo-server';
import { redisSub } from '../../providers';

const pubsub = new PubSub();

redisSub.subscribe('game', 'winner', 'jackpotWinner', 'message', 'online');
redisSub.on('message', (channel, message) => {
    switch (channel) {
        case 'game':
            pubsub.publish('GAME', { game: JSON.parse(message) });
            pubsub.publish('STATS', { stats: {} });
            break;
        case 'jackpotWinner':
            pubsub.publish('STATS', { stats: {} });
            break;
        case 'online':
            pubsub.publish('STATS', { stats: {} });
            break;
        case 'message':
            pubsub.publish('MESSAGE', { messages: JSON.parse(message) });
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
    messages: {
        subscribe: () => pubsub.asyncIterator(['MESSAGE']),
    },
};
