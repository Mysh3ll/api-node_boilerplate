import winston from 'winston';

import { mongoManager } from './mongo';

require('winston-mongodb');

winston.loggers.add('mongoLog', {
  transports: [
    new winston.transports.MongoDB({
      db: mongoManager._getMongoUrl(),
    }),
  ],
});

const logger = winston.loggers.get('mongoLog');

module.exports = logger;
