import _ from 'lodash';

import { sendList } from '../../middleware';

const list = ({ User }) => async (req, res, next) => {
  let { limit, skip, search } = req.query;
  skip = skip ? parseInt(skip, 10) : 0;
  limit = limit ? parseInt(limit, 10) : 100;

  try {
    const query = {};
    if (search) {
      _.extend(query, { title: new RegExp(`${search}`, 'i') });
    }
    const users = await User.find(query)
      .skip(skip)
      .limit(limit)
      .sort({ _id: -1 });

    return sendList(res, { users });
    // res.status(200).send({ users });
  } catch (error) {
    next(error);
  }
};

module.exports = { list };
