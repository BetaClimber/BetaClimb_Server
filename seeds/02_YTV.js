exports.seed = (knex) => {
  return knex.raw('TRUNCATE "YTV" RESTART IDENTITY CASCADE;')
    .then(() => {
      return knex('YTV').insert([
        {
          video_image_URL: 'http://img.youtube.com/vi/tN4WHTGWlHY/0.jpg',
          key: 'tN4WHTGWlHY'
        },
        {
          video_image_URL: 'http://img.youtube.com/vi/tN4WHTGWlHY/0.jpg',
          key: 'tN4WHTGWlHY'
        },
        {
          video_image_URL: 'http://img.youtube.com/vi/tN4WHTGWlHY/0.jpg',
          key: 'tN4WHTGWlHY'
        }
      ]);
    });
};
