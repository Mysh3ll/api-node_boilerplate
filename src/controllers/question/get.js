import { sendOne } from '../../middleware';

const get = ({ Question }) => async (req, res, next) => {
  try {
    // const userId = req.user.id;
    const { _id } = req.params;
    // const question = await Question.findOne({_id, userId});
    const question = await Question.findOne({ _id });

    return sendOne(res, { question });
    // res.status(200).send({question});
  } catch (error) {
    next(error);
  }
};

module.exports = { get };
