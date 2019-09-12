import _ from 'lodash';
import { sendUpdated } from '../../middleware';

const update = ({ User }) => async (req, res, next) => {
  try {
    // const userId = req.user.id;
    const { _id } = req.params;
    // const user = await User.findOne({_id, userId});
    const user = await User.findOne({ _id });
    _.extend(user, req.body);

    await user.save();
    return sendUpdated(res, { user });
    // res.status(200).send({user});
  } catch (error) {
    next(error);
  }
};

module.exports = { update };
