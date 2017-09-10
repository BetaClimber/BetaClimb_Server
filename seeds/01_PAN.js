exports.seed = (knex) => {
  return knex.raw('TRUNCATE "PAN" RESTART IDENTITY CASCADE;')
    .then(() => {
      return knex('PAN').insert([
        {
          image_URL: 'Yosemite.jpeg'
        },
        {
          image_URL: 'Bouldering.jpeg'
        },
        {
          image_URL: 'ElCap.jpeg'
        }
      ]);
    });
};
