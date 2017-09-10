exports.seed = (knex) => {
  return knex.raw('TRUNCATE condition RESTART IDENTITY CASCADE;')
    .then(() => {
      return knex('condition').insert([
        {
          conditionType: 'dry'
        },
        {
          conditionType: 'Slippery'
        },
        {
          conditionType: 'Wet'
        },
        {
          conditionType: 'Smooth'
        }
      ]);
    });
};
