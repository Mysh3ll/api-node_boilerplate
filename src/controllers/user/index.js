import { Router as router } from 'express';

import { authenticate } from '../../middleware';
import { update } from './update';

/**
 * Provide Api for User

 PUT /api/v1/users/my - Update User details
 @header
 Authorization: Bearer {token}
 @params
 email {string}

 **/

module.exports = models => {
  const api = router();

  api.put('/my', authenticate, update(models));

  return api;
};
