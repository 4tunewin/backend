/**
 * Re-export configuration based on current environment
 *
 * Environment can be specifiedn over NODE_ENV variable
 */
import development from './config.dev';
import production from './config.prod';

const env = process.NODE_ENV || 'development';

export default { development, production }[env];
