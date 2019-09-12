import mongoose from 'mongoose';
import { schema } from './schema';

// add hooks here
schema.pre('save', () => {
  // do stuff here
});

const Question = mongoose.model('Question', schema);

module.exports = { Question };
