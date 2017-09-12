const knex = require('./connection');

module.exports = {
  getAll: () => {
    return knex('route');
  },

  getOne: (route_id) => {
    return knex('route').where('id', route_id).first();
  },

  create: (route) => {
    return knex('route').insert(route).returning('*');
  },

  update: (route_id, route) => {
    return knex('route').update(route).where('id', route_id).returning('*');
  },

  delete: (route_id) => {
    return knex('route').del().where('id', route_id).returning('*');
  }
}
