const knex = require('./connection');

module.exports = {
  getAll: () => {
    return knex('Route_Note');
  },

  getOne: (Route_Note_id) => {
    return knex('Route_Note').where('id', Route_Note_id).first();
  },

  create: (Route_Note) => {
    return knex('Route_Note').insert(Route_Note).returning('*');
  },

  update: (Route_Note_id, Route_Note) => {
    return knex('Route_Note').update(Route_Note).where('id', Route_Note_id).returning('*');
  }
}
