exports.seed = (knex) => {
  return knex.raw('TRUNCATE "Note" RESTART IDENTITY CASCADE;')
    .then(() => {
      return knex('Note').insert([
        {
          title: 'This was a good experience',
          highlights: 'This was a great experience',
          pitfalls: 'There were falling rocks',
          blerb: 'Blerbing about that sick crag a top the crux',
          conditionType: 'Wet'
        },
        {
          title: 'This was a good experience',
          highlights: 'This was a great experience',
          pitfalls: 'There were falling rocks',
          blerb: 'Blerbing about that sick crag a top the crux',
          conditionType: 'Wet'
        },
        {
          title: 'This was a good experience',
          highlights: 'This was a great experience',
          pitfalls: 'There were falling rocks',
          blerb: 'Blerbing about that sick crag a top the crux',
          conditionType: 'Wet'
        },
        {
          title: 'This was a good experience',
          highlights: 'This was a great experience',
          pitfalls: 'There were falling rocks',
          blerb: 'Blerbing about that sick crag a top the crux',
          conditionType: 'Wet'
        },
        {
          title: 'This was a good experience',
          highlights: 'This was a great experience',
          pitfalls: 'There were falling rocks',
          blerb: 'Blerbing about that sick crag a top the crux',
          conditionType: 'Wet'
        },
        {
          title: 'This was a good experience',
          highlights: 'This was a great experience',
          pitfalls: 'There were falling rocks',
          blerb: 'Blerbing about that sick crag a top the crux',
          conditionType: 'Wet'
        }
      ]);
    });
};
