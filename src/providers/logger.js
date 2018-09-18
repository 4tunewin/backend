/**
 * Setup pino logger
 */
import pino from 'pino';

const logger = pino();

if (process.env.NODE_ENV !== 'test') {
    process.on(
        'uncaughtException',
        pino.final(logger, (err, finalLogger) => {
            finalLogger.error(err, 'uncaughtException');
            process.exit(1);
        }),
    );

    process.on(
        'unhandledRejection',
        pino.final(logger, (err, finalLogger) => {
            finalLogger.error(err, 'unhandledRejection');
            process.exit(1);
        }),
    );
}

export default logger;
