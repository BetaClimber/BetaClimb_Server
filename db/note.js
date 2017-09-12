const knex = require('./connection');

module.exports = {
  getAll: () => {
    return knex('note');
  },

  getOne: (note_id) => {
    return knex('note').where('id', note_id).first();
  },

  create: (note) => {
    return knex('note').insert(note).returning('*');
  },

  update: (note_id, note) => {
    return knex('note').update(note).where('id', note_id).returning('*');
  },

  delete: (note_id) => {
    return knex('note').del().where('id', note_id).returning('*');
  }
}
