/**
 * The connector for redis server
 */
import Redis from 'ioredis';

import logger from '../providers/logger';
import config from '../config';

const redis = new Redis(config.redis.host, config.redis.port);
redis.on('ready', () => {
    logger.info(
        `Successfully connected to Redis at ${config.redis.host}:${
            config.redis.port
        }`,
    );
});

export default redis;
