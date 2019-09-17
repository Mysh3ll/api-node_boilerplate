import { sendDeleted } from '../../middleware/index';

const remove = ({ Question }) => async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { _id } = req.params;
    const question = await Question.findOne({ _id, createdBy: userId });
    // const question = await Question.findOne({ _id });
    await Question.deleteOne({ _id, createdBy: userId });

    // await Question.remove({ _id });
    return sendDeleted(res, { question });
    // res.status(200).send({ question });
  } catch (error) {
    next(error);
  }
};

module.exports = { remove };
