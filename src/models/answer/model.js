import mongoose from 'mongoose';
import { schema } from './schema';

// add hooks here
schema.pre('save', () => {
  // do stuff here
});

const Answer = mongoose.model('Answer', schema);

module.exports = { Answer };
