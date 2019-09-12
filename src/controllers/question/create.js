import _ from 'lodash';
import { NotAcceptable } from 'rest-api-errors';

import { sendCreated } from '../../middleware';

const create = ({ Question }) => async (req, res, next) => {
  try {
    // todo: add user id to Question

    // const userId = req.user.id;
    // const question = new question({ userId });
    const question = new Question();
    if (!req.body.title) {
      throw new NotAcceptable(405, 'Should by title');
    }
    _.extend(question, req.body);

    await question.save();
    return sendCreated(res, { question });
  } catch (error) {
    next(error);
  }
};

module.exports = { create };
