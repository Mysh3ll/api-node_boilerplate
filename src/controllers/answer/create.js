import _ from 'lodash';
import { NotAcceptable } from 'rest-api-errors';

import { sendCreated } from '../../middleware';

const create = ({ Answer }) => async (req, res, next) => {
  try {
    // todo: add user id to Question

    // const userId = req.user.id;
    // const answer = new Answer({ userId });
    const answer = new Answer();
    if (!req.body.title) {
      throw new NotAcceptable(405, 'Should by title');
    }
    _.extend(answer, req.body);

    await answer.save();
    return sendCreated(res, { answer });
  } catch (error) {
    next(error);
  }
};

module.exports = { create };
