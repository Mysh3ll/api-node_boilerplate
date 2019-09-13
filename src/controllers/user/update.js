import _ from 'lodash';
import { MethodNotAllowed } from 'rest-api-errors';

import { sendUpdated } from '../../middleware/index';

const update = ({ User }) => async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    const { email } = req.body;
    if (!user) {
      throw new MethodNotAllowed(405, 'Permission denied');
    }
    _.extend(user, {
      email: email,
    });

    await user.save();
    return sendUpdated(res, { user });
    // res.status(200).send({user});
  } catch (error) {
    next(error);
  }
};

module.exports = { update };
