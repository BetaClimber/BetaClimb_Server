const knex = require('./connection');

module.exports = {
  getAll: () => {
    return knex('Note');
  },

  getOne: (Note_id) => {
    return knex('Note').where('id', Note_id).first();
  },

  create: (Note) => {
    return knex('Note').insert(Note).returning('*');
  },

  update: (Note_id, Note) => {
    return knex('Note').update(Note).where('id', Note_id).returning('*');
  },

  delete: (Note_id) => {
    return knex('Note').del().where('id', Note_id).returning('*');
  }
}
