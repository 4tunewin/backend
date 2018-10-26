import { PubSub } from 'apollo-server';
import { redisSub } from '../../providers';

const pubsub = new PubSub();

redisSub.subscribe('game');
redisSub.on('message', (channel, message) => {
    if (channel === 'game') {
        const game = JSON.parse(message);
        pubsub.publish('GAME', { game });
    }
});

export const Subscription = {
    game: {
        subscribe: () => pubsub.asyncIterator(['GAME']),
    },
};
