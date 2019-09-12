import _ from 'lodash';
import { NotAcceptable } from 'rest-api-errors';

import { sendCreated } from '../../middleware';

const create = ({ User }) => async (req, res, next) => {
  try {
    // todo: add user id to User

    // const userId = req.user.id;
    // const question = new question({ userId });
    const user = new User();
    if (!req.body.username) {
      throw new NotAcceptable(405, 'Should by username');
    }
    _.extend(user, req.body);

    await user.save();
    return sendCreated(res, { user });
  } catch (error) {
    next(error);
  }
};

module.exports = { create };
