exports.up = (knex) => {

  return knex.schema.createTableIfNotExists('route', (table) => {
    table.increments('id').primary();
    table.string('name').unique().notNullable();
    table.string('grade').notNullable();
    table.string('climbType').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('route');
};
