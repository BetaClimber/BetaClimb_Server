exports.seed = (knex) => {
  return knex.raw('TRUNCATE "Route_Note" RESTART IDENTITY CASCADE;')
    .then(() => {
      return knex('Route_Note').insert([
        {
          routeId: 1,
          noteId: 1
        },
        {
          routeId: 2,
          noteId: 2
        },
        {
          routeId: 3,
          noteId: 3
        },
        {
          routeId: 1,
          noteId: 4
        },
        {
          routeId: 2,
          noteId: 5
        },
        {
          routeId: 3,
          noteId: 6
        }
      ]);
    });
};
