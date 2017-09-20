const knex = require('./connection');

module.exports = {
  getAll: () => {
    return knex('Route');
  },

  getOne: (Route_id) => {
    return knex('Route').where('id', Route_id).first();
  },

  create: (Route) => {
    return knex('Route').insert(Route).returning('*');
  },

  update: (Route_id, Route) => {
    return knex('Route').update(Route).where('id', Route_id).returning('*');
  },

  delete: (Route_id) => {
    return knex('Route').del().where('id', Route_id).returning('*');
  }
}
