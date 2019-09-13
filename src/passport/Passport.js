import passportNPM from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { User } from '../models/user';
import PassportStrategies from './PasportStrategies';
import config from '../config';

/**
 * Provide passport authenticate logic
 *
 *  @example
 *         ./index.js
 *         app.use(passport.init())
 * **/

class Passport {
  constructor() {
    this._passport = passportNPM;
    this._strategies = new PassportStrategies(User);

    this._passport.use(
      new LocalStrategy(
        {
          usernameField: 'email',
          passwordField: 'password',
        },
        this._strategies.local,
      ),
    );
  }

  init() {
    this._passport.serializeUser(User.serializeUser());
    this._passport.deserializeUser(User.deserializeUser());

    return this._passport.initialize();
  }
}

const passport = new Passport(config);

export default passport;
