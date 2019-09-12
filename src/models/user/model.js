import mongoose from 'mongoose';
import { schema } from './schema';

// add hooks here
schema.pre('save', () => {
  // do stuff here
});

const User = mongoose.model('User', schema);

module.exports = { User };
