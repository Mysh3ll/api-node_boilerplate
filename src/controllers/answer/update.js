import _ from 'lodash';
import { sendUpdated } from '../../middleware';

const update = ({ Answer }) => async (req, res, next) => {
  try {
    // const userId = req.user.id;
    const { _id } = req.params;
    // const answer = await Answer.findOne({_id, userId});
    const answer = await Answer.findOne({ _id });
    _.extend(answer, req.body);

    await answer.save();
    return sendUpdated(res, { answer });
    // res.status(200).send({answer});
  } catch (error) {
    next(error);
  }
};

module.exports = { update };
