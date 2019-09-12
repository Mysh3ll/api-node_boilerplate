import { sendDeleted } from '../../middleware/index';

const remove = ({ User }) => async (req, res, next) => {
  try {
    // const userId = req.user.id;
    const { _id } = req.params;
    // const question = await User.findOne({ _id, userId });
    const user = await User.findOne({ _id });
    // await User.remove({ _id, userId });

    await User.remove({ _id });
    return sendDeleted(res, { user });
    // res.status(200).send({ user });
  } catch (error) {
    next(error);
  }
};

module.exports = { remove };
