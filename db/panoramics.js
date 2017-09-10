const knex = require('./connection');

module.exports = {
  getAll: () => {
    return knex('PAN');
  },

  get: (id) => {
    return knex('PAN').where('id', id).first();
  },

  create: (panoramic) => {
    return knex('PAN').insert(panoramic).returning('*');
  },

  update: (panoramic_id, panoramic) => {
    return knex('PAN').update(panoramic).where('id', panoramic_id).returning('*');
  },

  delete: (panoramic_id) => {
    return knex('PAN').where('id', panoramic_id).del().where('id', panoramic_id).returning('*');
  }
}
