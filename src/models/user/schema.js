import mongoose from 'mongoose';

import { EMAIL } from '../../utils/regexes';

const Schema = mongoose.Schema;

const schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: email => EMAIL.test(email),
      message: 'Field [email] wrong format.',
    },
  },
});

module.exports = { schema };
