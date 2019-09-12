import { sendDeleted } from '../../middleware/index';

const remove = ({ Answer }) => async (req, res, next) => {
  try {
    // const userId = req.user.id;
    const { _id } = req.params;
    // const answer = await Answer.findOne({ _id, userId });
    const answer = await Answer.findOne({ _id });
    // await Answer.remove({ _id, userId });

    await Answer.remove({ _id });
    return sendDeleted(res, { answer });
    // res.status(200).send({ answer });
  } catch (error) {
    next(error);
  }
};

module.exports = { remove };
