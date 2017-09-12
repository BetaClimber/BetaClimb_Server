const knex = require('./connection');

module.exports = {
  getAll: () => {
    return knex('location');
  },

  getOne: (location_id) => {
    return knex('location').where('id', location_id).first();
  },

  create: (location) => {
    return knex('location').insert(location).returning('*');
  },

  update: (location_id, location) => {
    return knex('location').update(location).where('id', location_id).returning('*');
  },

  delete: (location_id) => {
    return knex('location').del().where('id', location_id).returning('*');
  }
}
