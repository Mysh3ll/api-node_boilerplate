import mongoose from 'mongoose';
import { Question } from '../models/question';
import { User } from '../models/user';

class MongoManager {
  constructor() {
    this._config = {
      MONGODB_URI: process.env.DATABASE_URL,
      OPTIONS: {
        useNewUrlParser: true,
        useCreateIndex: true,
      },
    };
  }

  _getMongoUrl() {
    return this._config.MONGODB_URI;
  }

  _getMongoOptions() {
    return this._config.OPTIONS;
  }

  _initListeners() {
    const { connection } = mongoose;

    connection.on('connected', () => {
      console.log('Mongoose default connection is open to ', process.env.DATABASE_URL);
    });

    connection.on('error', err => {
      console.log('Mongoose default connection has occured ' + err + ' error');
    });

    connection.on('disconnected', () => {
      console.log('Mongoose default connection is disconnected');
    });

    process.on('SIGINT', () => {
      mongoose.connection.close(() => {
        console.log('Mongoose default connection is disconnected due to application termination');
        process.exit(0);
      });
    });
  }

  async _initData() {
    const user1 = new User({
      email: 'michel@dev.com',
    });
    await user1.setPassword('Azerty1');

    const user2 = new User({
      email: 'andre@dev.com',
    });
    await user2.setPassword('Azerty1');

    const question1 = new Question({
      title: 'Question 1',
      description: 'Description de la question 1',
      tags: ['dev', 'api', 'nodejs'],
      createdAt: Date.now(),
      createdBy: user1.id,
    });

    const question2 = new Question({
      title: 'Question 2',
      description: 'Description de la question 2',
      tags: ['dev', 'api', 'nodejs'],
      createdAt: Date.now(),
      createdBy: user1.id,
    });

    const question3 = new Question({
      title: 'Question 3',
      description: 'Description de la question 3',
      tags: ['dev', 'api', 'nodejs'],
      createdAt: Date.now(),
      createdBy: user2.id,
    });

    const question4 = new Question({
      title: 'Question 4',
      description: 'Description de la question 4',
      tags: ['dev', 'api', 'nodejs'],
      createdAt: Date.now(),
      createdBy: user2.id,
    });

    await question1.save();
    await question2.save();
    await question3.save();
    await question4.save();

    await user1.save();
    await user2.save();
  }

  connect() {
    const mongooseConnect = mongoose
      .connect(this._getMongoUrl(), this._getMongoOptions())
      .then(async () => {
        if (process.env.ERASE_DATABASE_ON_SYNC) {
          await Promise.all([Question.deleteMany({}), User.deleteMany({})]);

          await this._initData();
        }
      });

    this._initListeners();

    return mongooseConnect;
  }
}

const mongoManager = new MongoManager();

module.exports = { mongoManager };
