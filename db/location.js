const knex = require('./connection');

module.exports = {
  getAll: () => {
    return knex('location');
  },

  get: (id) => {
    return knex('location').where('id', id).first();
  },

  create: (badge) => {
    return knex('location').insert(badge).returning('*');
  },

  update: (badge_id, badge) => {
    return knex('location').update(badge).where('id', badge_id).returning('*');
  },

  delete: (badge_id) => {
    return knex('location').where('id', badge_id).del().where('id', badge_id).returning('*');
  }
}
