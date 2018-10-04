import { PubSub } from 'apollo-server';
import { redisSub } from '../../providers';

const pubsub = new PubSub();

redisSub.subscribe('games');
redisSub.on('message', (channel, message) => {
    if (channel === 'games') {
        const game = JSON.parse(message);
        pubsub.publish('GAME', { game });
    }
});

export const Subscription = {
    game: {
        subscribe: () => pubsub.asyncIterator(['GAME']),
    },
};
