exports.up = (knex) => {

  return knex.schema.createTableIfNotExists('location', (table) => {
    table.increments('id').primary();
    table.string('city').notNullable();
    table.string('address').notNullable();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('location');
};
