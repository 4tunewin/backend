import { redis } from '../../providers';

export const Message = {
    author: (obj, args, context) => {
        return redis.get(`user:${obj.from}`).then(JSON.parse);
    },
};
