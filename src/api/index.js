import express from 'express';

import { errorHandler } from '../middleware';

// list of models here
import { Question } from '../models/question';
import { User } from '../models/user';

// list of controllers here
import auth from '../controllers/auth';
import questions from '../controllers/question';
import users from '../controllers/user';

// combine models into one object
const models = { Question, User };

const routersInit = () => {
  const router = express();

  // register api points
  router.use('/auth', auth(models));
  router.use('/questions', questions(models));
  router.use('/users', users(models));

  // catch api call errors
  router.use(errorHandler);

  return router;
};

module.exports = routersInit;
