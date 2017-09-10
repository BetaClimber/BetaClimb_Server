exports.up = (knex) => {
  return knex.schema.createTableIfNotExists('YTV', (table) => {
    table.increments('id').primary();
    table.string('video_image_URL')
    table.string('key').notNullable();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('YTV');
};
