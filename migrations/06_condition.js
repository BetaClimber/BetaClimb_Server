exports.up = (knex) => {

  return knex.schema.createTableIfNotExists('condition', (table) => {
    table.increments('id').primary();
    table.string('conditionType').notNullable();
    table.string('isApplied').defaultTo(true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('condition');
};
