exports.seed = (knex) => {
  return knex.raw('TRUNCATE "Route" RESTART IDENTITY CASCADE;')
    .then(() => {
      return knex('Route').insert([{
          name: 'crack of dawn',
          location: 'Cannon Beach, OR'
          gradeType: 'Hueco',
          grade: 'V4',
          climbType: 'Bouldering'
        },
        {
          name: 'under the cove',
          location: 'Boulder-Creek, Boulder, Co'
          gradeType: 'YDS',
          grade: '5.11',
          climbType: 'Top-Rope'
        },
        {
          name: 'Falling Rocks',
          location: 'Earth Treks, Golden, Co'
          gradeType: 'YDS',
          grade: '5.15b',
          climbType: 'Free-Solo'
        },
        {
          name: 'Sedoku\'s Brother',
          location: 'The Spot, Boulder, Co',
          gradeType: 'Hueco',
          grade: 'V4',
          climbType: 'Bouldering'
        },
        {
          name: 'Crag Me Up',
          location: 'Movements Climbing Gym, broadway st. denver, Co'
          gradeType: 'YDS',
          grade: '5.11',
          climbType: 'Top-Rope'
        },
        {
          name: 'Hang Loose',
          location: 'RedRocks, Denver',
          gradeType: 'YDS',
          grade: '5.15b',
          climbType: 'Free-Solo'
        },
        {
          name: 'Twister',
          location: 'Rock\'n and Jam\'n, Thornton, Co'
          gradeType: 'YDS',
          grade: '5.11',
          climbType: 'Top-Rope'
        },
        {
          name: 'Walk in the Park',
          location: 'Rock\'n and Jam\'n, Centennial, Co'
          gradeType: 'YDS',
          grade: '5.15b',
          climbType: 'Free-Solo'
        },
        {
          name: 'Mighty Feast',
          location: 'Bear Creek trail, Glendale, Co'
          gradeType: 'Hueco',
          grade: 'V4',
          climbType: 'Bouldering'
        },
        {
          name: 'Natures End',
          location: 'RedRocks, Denver, Co',
          gradeType: 'YDS',
          grade: '5.11',
          climbType: 'Top-Rope'
        },
        {
          name: 'ElCapitan',
          location: 'Yosemite National Park, California'
          gradeType: 'YDS',
          grade: '5.15b',
          climbType: 'Free-Solo'
        }
      ]);
    });
};
