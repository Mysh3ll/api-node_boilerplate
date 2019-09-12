import { sendOne } from '../../middleware';

const get = ({ User }) => async (req, res, next) => {
  try {
    // const userId = req.user.id;
    const { _id } = req.params;
    // const user = await User.findOne({_id, userId});
    const user = await User.findOne({ _id });

    return sendOne(res, { user });
    // res.status(200).send({user});
  } catch (error) {
    next(error);
  }
};

module.exports = { get };
