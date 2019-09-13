import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

import { schema } from './schema';

// add hooks here
schema.pre('save', () => {
  // do stuff here
});

schema.plugin(passportLocalMongoose, {
  usernameField: 'email',
});

const User = mongoose.model('User', schema);

module.exports = { User };
