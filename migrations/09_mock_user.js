exports.up = (knex) => {

  return knex.schema.createTableIfNotExists('user', (table) => {
    table.increments('id').primary();
    table.string('userName').unique().notNullable();
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.boolean('isActive').defaultTo(true);

    // foreign columns
    table.integer('log_id').references('log.id').unsigned().onDelete('cascade');
    table.integer('badge_id').references('badge.id').unsigned().onDelete('cascade');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('user');
};
