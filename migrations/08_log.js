exports.up = (knex) => {

  return knex.schema.createTableIfNotExists('log', (table) => {
    table.increments('id').primary();

    // foreign colums
    table.integer('route_id').references('route.id').unsigned().onDelete('cascade');
    table.integer('note_id').references('note.id').unsigned().onDelete('cascade');
    table.integer('location_id').references('location.id').unsigned().onDelete('cascade');
    table.integer('condition_id').references('condition.id').unsigned().onDelete('cascade');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('log');
};
