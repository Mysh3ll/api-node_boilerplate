import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  tags: {
    type: [String],
    // required: true,
  },

  createdAt: {
    type: Date,
    // required: true,
    default: Date.now,
  },
  createdBy: {
    type: ObjectId,
    ref: 'User',
  },
});

module.exports = { schema };
