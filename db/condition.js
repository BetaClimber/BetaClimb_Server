const knex = require('./connection');

module.exports = {
  getAll: () => {
    return knex('PAN');
  },

  get: (id) => {
    return knex('condition').where('id', id).first();
  },

  create: (condition) => {
    return knex('condition').insert(condition).returning('*');
  },

  update: (condition_id, condition) => {
    return knex('condition').update(condition).where('id', condition_id).returning('*');
  },

  delete: (condition_id) => {
    return knex('conditon').where('id', condition_id).del().where('id', condition_id).returning('*');
  }
}
