exports.seed = (knex) => {
  return knex.raw('TRUNCATE "Route" RESTART IDENTITY CASCADE;')
    .then(() => {
      return knex('Route').insert([
        {
          name: 'crack of dawn',
          gradeType: 'Hueco',
          grade: 'V4',
          climbType: 'Bouldering'
        },
        {
          name: 'under the cove',
          gradeType: 'YDS',
          grade: '5.11',
          climbType: 'Top-Rope'
        },
        {
          name: 'falling rocks',
          gradeType: 'YDS',
          grade: '5.15b',
          climbType: 'Free-Solo'
        }
      ]);
    });
};
