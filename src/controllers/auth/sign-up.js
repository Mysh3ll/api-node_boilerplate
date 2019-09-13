import { NotAcceptable } from 'rest-api-errors';

import { withoutErrors } from '../../middleware';
import { PASSWORD } from '../../utils/regexes';

const signUp = ({ User }) => (req, res, next) => {
  const { email, password } = req.body;

  if (!PASSWORD.test(password)) {
    return next(new NotAcceptable(406, 'Password is in wrong format.'));
  }

  const user = new User({
    email: email,
  });

  User.register(user, password, withoutErrors(next, () => next()));
};

module.exports = signUp;
