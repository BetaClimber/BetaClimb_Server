const knex = require('./connection');

module.exports = {
  getAll: () => {
    return knex('log');
  },

  getOne: (log_id) => {
    return knex('log').where('id', log_id).first();
  },

  create: (log) => {
    return knex('log').insert(log).returning('*');
  },

  update: (log_id, log) => {
    return knex('log').update(log).where('id', log_id).returning('*');
  },

  delete: (log_id) => {
    return knex('log').del().where('id', log_id).returning('*');
  }
}
