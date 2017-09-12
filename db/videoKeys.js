const knex = require('./connection');

module.exports = {
  getAll: () => {
    return knex('YTV');
  },

  get: (id) => {
    return knex('YTV').where('id', id).first();
  },

  create: (YTV) => {
    return knex('YTV').insert(YTV).returning('*');
  },

  update: (YTV_id, YTV) => {
    return knex('YTV').update(YTV).where('id', YTV_id).returning('*');
  },

  delete: (YTV_id) => {
    return knex('YTV').where('id', YTV_id).del().where('id', YTV_id).returning('*');
  }
}
