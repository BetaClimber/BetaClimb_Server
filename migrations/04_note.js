exports.up = (knex) => {

  return knex.schema.createTableIfNotExists('note', (table) => {
    table.increments('id').primary();
    table.string('radHighlights');
    table.string('unStoked');
    table.string('blerb');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('note');
};
