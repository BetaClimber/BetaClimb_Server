const knex = require('./connection');

module.exports = {
  getAll: () => {
    return knex('badge');
  },

  getOne: (badge_id) => {
    return knex('badge').where('id', badge_id).first();
  },

  create: (badge) => {
    return knex('badge').insert(badge).returning('*');
  },

  update: (badge_id, badge) => {
    return knex('badge').update(badge).where('id', badge_id).returning('*');
  },

  delete: (badge_id) => {
    return knex('badge').del().where('id', badge_id).returning('*');
  }
}
