import { Router as router } from 'express';
import { authenticate } from '../../middleware';

const { get } = require('./get');
const { list } = require('./list');
const { create } = require('./create');
const { update } = require('./update');
const { remove } = require('./remove');

/**
 * Provide api for questions
 *
 *
 * GET /api/v1/questions/ - List
     @header
        Authorization: Bearer {token}
     @optionalQueryParameters
         search {String} - value to search
         limit {Number} - count of item to send
         skip {Number} - value to search
 *
 *
 * **/

module.exports = models => {
  const api = router();

  api.get('/', authenticate, list(models));
  api.get('/:_id', authenticate, get(models));
  api.post('/', authenticate, create(models));
  api.patch('/:_id', authenticate, update(models));
  api.delete('/:_id', authenticate, remove(models));

  return api;
};
