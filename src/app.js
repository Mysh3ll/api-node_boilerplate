import 'dotenv/config';
import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';

import passport from './passport';
import { mongoManager } from './mongo';
import api from './api';
// const config = require('./config');

const app = express();
mongoManager.connect();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

// Authorization
app.use(passport.init());

// api routes v1
app.use('/api/v1', api());

export default app;
