import { APIError, InternalServerError } from 'rest-api-errors';
import { STATUS_CODES } from 'http';
import logger from '../logger';

const errorHandler = (err, req, res, next) => {
  const error = err.status === 401 || err instanceof APIError ? err : new InternalServerError();

  if (process.env.NODE_ENV !== 'production') {
    console.log('-----> Unknown server error...');
    console.log(err);
  }
  if (['ValidationError', 'UserExistsError'].includes(err.name)) {
    // if it special error
    return res.status(405).json(err);
  }

  if (err.name === 'MongoError' && err.code === 11000) {
    // Duplicate
    return res.status(422).json({
      keyValue: err.keyValue,
      message: 'Duplicate key error collection.',
    });
  }
  // log error if needed
  logger.info('API error', { error: err });

  return res // return 500 for user
    .status(error.status || 500)
    .json({
      code: error.code || 500,
      message: error.message || STATUS_CODES[error.status],
    });
};

module.exports = { errorHandler };
