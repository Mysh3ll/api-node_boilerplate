import express from 'express';

import { errorHandler } from '../middleware';

// list of models here
import { Answer } from '../models/answer';
import { Question } from '../models/question';
import { User } from '../models/user';

// list of controllers here
import answers from '../controllers/answer';
import questions from '../controllers/question';
import users from '../controllers/user';

// combine models into one object
const models = { Answer, Question, User };

const routersInit = () => {
  const router = express();

  // register api points
  router.use('/answers', answers(models));
  router.use('/questions', questions(models));
  router.use('/users', users(models));

  // catch api call errors
  router.use(errorHandler);

  return router;
};

module.exports = routersInit;
