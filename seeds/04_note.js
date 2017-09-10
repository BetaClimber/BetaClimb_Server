exports.seed = (knex) => {
  return knex.raw('TRUNCATE note RESTART IDENTITY CASCADE;')
    .then(() => {
      return knex('note').insert([
        {
          radHighlights: 'This was a great experience',
          unStoked: 'There were falling rocks',
          blerb: 'Blerbing about that sick crag a top the crux'
        },
        {
          radHighlights: 'This was a great experience',
          unStoked: 'There were falling rocks',
          blerb: 'Blerbing about that sick crag a top the crux'
        },
        {
          radHighlights: 'This was a great experience',
          unStoked: 'There were falling rocks',
          blerb: 'Blerbing about that sick crag a top the crux'
        },
        {
          radHighlights: 'This was a great experience',
          unStoked: 'There were falling rocks',
          blerb: 'Blerbing about that sick crag a top the crux'
        },
        {
          radHighlights: 'This was a great experience',
          unStoked: 'There were falling rocks',
          blerb: 'Blerbing about that sick crag a top the crux'
        },
        {
          radHighlights: 'This was a great experience',
          unStoked: 'There were falling rocks',
          blerb: 'Blerbing about that sick crag a top the crux'
        },
        {
          radHighlights: 'This was a great experience',
          unStoked: 'There were falling rocks',
          blerb: 'Blerbing about that sick crag a top the crux'
        },
        {
          radHighlights: 'This was a great experience',
          unStoked: 'There were falling rocks',
          blerb: 'Blerbing about that sick crag a top the crux'
        },
        {
          radHighlights: 'This was a great experience',
          unStoked: 'There were falling rocks',
          blerb: 'Blerbing about that sick crag a top the crux'
        }
      ]);
    });
};
