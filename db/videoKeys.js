const knex = require('./connection');

module.exports = {
  getAll: () => {
    return knex('YTV');
  },

  getOne: (YTV_id) => {
    return knex('YTV').where('id', YTV_id).first();
  },

  create: (YTV) => {
    return knex('YTV').insert(YTV).returning('*');
  },

  update: (YTV_id, YTV) => {
    return knex('YTV').update(YTV).where('id', YTV_id).returning('*');
  },

  delete: (YTV_id) => {
    return knex('YTV').del().where('id', YTV_id).returning('*');
  }
}
