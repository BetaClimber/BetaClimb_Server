exports.seed = (knex) => {
  return knex.raw('TRUNCATE log RESTART IDENTITY CASCADE;')
    .then(() => {
      return knex('log').insert([
        {
          route_id: 1,
          note_id: 1,
          note_id: 2,
          note_id:3,
          location_id: 1,
          condition_id: 2,
          condition_id: 4,
        },
        {
          route_id: 2,
          note_id: 4,
          note_id:5,
          note_id: 6,
          location_id: 2,
          condition_id: 2,
          condition_id: 3,
        },
        {
          route_id: 3,
          note_id: 7,
          note_id: 8,
          note_id: 9,
          location_id:3,
          condition_id: 3,
        }
      ]);
    });
};
