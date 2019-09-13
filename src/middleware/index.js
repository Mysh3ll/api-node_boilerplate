import { errorHandler } from './error-handler';
import { authenticate, generateAccessToken } from '../passport/passport-middleware';

import {
  sendAccepted,
  sendCreated,
  sendDeleted,
  sendList,
  sendOne,
  sendUpdated,
  withoutErrors,
} from './requests-helpers';

module.exports = {
  sendOne,
  sendList,
  sendCreated,
  sendUpdated,
  sendDeleted,
  sendAccepted,
  authenticate,
  generateAccessToken,
  withoutErrors,
  errorHandler,
};
