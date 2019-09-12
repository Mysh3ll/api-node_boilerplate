import { sendOne } from '../../middleware';

const get = ({ Answer }) => async (req, res, next) => {
  try {
    // const userId = req.user.id;
    const { _id } = req.params;
    // const answer = await Answer.findOne({_id, userId});
    const answer = await Answer.findOne({ _id });

    return sendOne(res, { answer });
    // res.status(200).send({answer});
  } catch (error) {
    next(error);
  }
};

module.exports = { get };
