exports.up = (knex) => {

  return knex.schema
  .createTableIfNotExists('Route', (table) => {
    table.increments('id').primary();

    table.string('name').unique().notNullable();
    table.string('gradeType').notNullable();
    table.string('grade').notNullable();
    table.string('climbType').notNullable();

  })
  .createTableIfNotExists('Note', (table) => {
    table.increments('id').primary();

    table.string('title');
    table.string('highlights');
    table.string('pitfalls');
    table.string('blerb');
    table.string('conditionType').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());

  })
  .createTableIfNotExists('Route_Note', (table) => {
    table.increments('id').primary();

    table.integer('routeId').unsigned().references('id').inTable('Route').onDelete('CASCADE');
    table.integer('noteId').unsigned().references('id').inTable('Note').onDelete('CASCADE');

  });
};

exports.down = (knex) => {
  return knex.schema
    .dropTableIfExists('Route')
    .dropTableIfExists('Note');
};
