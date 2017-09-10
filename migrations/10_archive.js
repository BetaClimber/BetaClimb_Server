exports.up = (knex) => {
  return knex.schema.createTableIfNotExists('archive', (table) => {
    table.increments('id').primary();

    // foreign columns
    table.integer('YTV_id').references('YTV.id').unsigned().onDelete('cascade');
    table.integer('PAN_id').references('PAN.id').unsigned().onDelete('cascade');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('archive');
};
