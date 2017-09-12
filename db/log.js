const knex = require('./connection');

module.exports = {
  getAll: () => {
    return knex('log');
  },

  get: (id) => {
    return knex('log').where('id', id).first();
  },

  create: (log) => {
    return knex('log').insert(log).returning('*');
  },

  update: (log_id, log) => {
    return knex('log').update(log).where('id', log_id).returning('*');
  },

  delete: (log_id) => {
    return knex('log').where('id', log_id).del().where('id', log_id).returning('*');
  }
}
