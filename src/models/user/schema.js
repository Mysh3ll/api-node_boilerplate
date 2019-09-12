import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});

module.exports = { schema };
