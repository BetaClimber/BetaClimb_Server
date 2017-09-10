exports.seed = (knex) => {
  return knex.raw('TRUNCATE location RESTART IDENTITY CASCADE;')
    .then(() => {
      return knex('location').insert([
        {
          city: 'Yosemite',
          address: '1234 el-cap st, california'
        },
        {
          city: 'Boulder',
          address: '1234 el-cap st, california'
        },
        {
          city: 'Denver',
          address: '1234 el-cap st, california'
        }
      ]);
    });
};
