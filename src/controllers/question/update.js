import _ from 'lodash';
import { sendUpdated } from '../../middleware';

const update = ({ Question }) => async (req, res, next) => {
  try {
    // const userId = req.user.id;
    const { _id } = req.params;
    // const question = await Question.findOne({_id, userId});
    const question = await Question.findOne({ _id });
    _.extend(question, req.body);

    await question.save();
    return sendUpdated(res, { question });
    // res.status(200).send({question});
  } catch (error) {
    next(error);
  }
};

module.exports = { update };
