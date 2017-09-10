exports.up = (knex) => {
  return knex.schema.createTableIfNotExists('PAN', (table) => {
    table.increments('id').primary();
    table.string('image_URL').notNullable();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('PAN');
};
