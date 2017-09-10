exports.up = (knex) => {
  return knex.schema.createTableIfNotExists('badge', (table) => {
    table.increments('id').primary();
    table.json('jsonifiedBadges');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('badge');
};
