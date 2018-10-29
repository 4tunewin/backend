import { PubSub } from 'apollo-server';
import { redisSub } from '../../providers';

const pubsub = new PubSub();

redisSub.subscribe('game', 'winner', 'jackpotWinner');
redisSub.on('message', (channel, message) => {
    switch (channel) {
        case 'game':
            const game = JSON.parse(message);
            pubsub.publish('GAME', { game });
            // pubsub.publish('STATS', { stats: { wagers: game } });
            break;
        // case 'winner':
        //     const winner = JSON.parse(message);
        //     pubsub.publish('STATS', {
        //         stats: {
        //             winners: [winner],
        //         },
        //     });
        //     break;
        default:
            break;
    }
});

export const Subscription = {
    game: {
        subscribe: () => pubsub.asyncIterator(['GAME']),
    },
    wagers: {
        subscribe: () => pubsub.asyncIterator(['WAGERS']),
    },
};
