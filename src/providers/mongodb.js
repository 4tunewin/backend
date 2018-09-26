/**
 * Setup connection to MongoDB using mongoose provider
 */

import Mongoose from 'mongoose';
import Promise from 'bluebird';

import logger from './logger';
import config from '../config';

Mongoose.Promise = Promise;
Mongoose.set('useCreateIndex', true);

Mongoose.connect(
    config.mongodb.uri,
    config.mongodb.options,
);
const connection = Mongoose.connection;

connection.on('error', error => {
    logger.error(error, 'MongoDB connection error');
});

connection.once('open', () => {
    logger.info(`Successfully connected to MongoDB at ${config.mongodb.uri}`);
});
