exports.seed = (knex) => {
  return knex.raw('TRUNCATE "user" RESTART IDENTITY CASCADE;') // user is queried with quotes unlike other tables
    .then(() => {
      return knex('user').insert([
        {
          userName: 'AEskenazi',
          email: 'drewesk@gmail.com',
          password: 's3f32f33fsdfsdfdsfsdfff3',
          badge_id: 1,
          log_id: 1,
        },
        {
          userName: 'CreativeUserName',
          email: 'CUName@climb.com',
          password: '2sd345f6dg7df7gdfg7df7gg',
          badge_id: 2,
          log_id: 2,
        },
        {
          userName: 'AlexHonnold',
          email: 'honnold@climb.com',
          password: '1h2h34nhsdjnsdn232h4b23',
          badge_id: 3,
          log_id: 3,
        }
      ]);
    });
};
