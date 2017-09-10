exports.seed = (knex) => {
  return knex.raw('TRUNCATE badge RESTART IDENTITY CASCADE;')
    .then(() => {
      return knex('badge').insert([
        {
          jsonifiedBadges: JSON.stringify([13, 43, 32])
        },
        {
          jsonifiedBadges: JSON.stringify([1, 2, 3])
        },
        {
          jsonifiedBadges: JSON.stringify(Array(30).fill(1))
        }
      ]);
    });
};
