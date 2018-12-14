/**
 * Re-export configuration based on current environment
 *
 * Environment can be specifiedn over NODE_ENV variable
 */
import dotenv from 'dotenv';

import development from './config.dev';
import production from './config.prod';
import staging from './config.stage';

dotenv.config();

const env = process.env.NODE_ENV || 'development';

export default { development, production, staging }[env];
