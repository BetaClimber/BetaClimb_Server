exports.seed = (knex) => {
  return knex.raw('TRUNCATE "Note" RESTART IDENTITY CASCADE;')
    .then(() => {
      return knex('Note').insert([
        {
          radHighlights: 'This was a great experience',
          unStoked: 'There were falling rocks',
          blerb: 'Blerbing about that sick crag a top the crux',
          conditionType: 'Wet'
        },
        {
          radHighlights: 'This was a great experience',
          unStoked: 'There were falling rocks',
          blerb: 'Blerbing about that sick crag a top the crux',
          conditionType: 'Wet'
        },
        {
          radHighlights: 'This was a great experience',
          unStoked: 'There were falling rocks',
          blerb: 'Blerbing about that sick crag a top the crux',
          conditionType: 'Wet'
        }
      ]);
    });
};
