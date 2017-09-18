exports.seed = (knex) => {
  return knex.raw('TRUNCATE "Note" RESTART IDENTITY CASCADE;')
    .then(() => {
      return knex('Note').insert([
        {
          title: 'This was a good experience',
          highlights: 'I found many footholds that enabled me to scale the wall in spiderman fasion',
          pitfalls: 'The gusts of wind was shifting my weight',
          blerb: 'Blerbing about that sick crag a top the crux',
          conditionType: 'Mostly Sunny and the rocks were dry'
        },
        {
          title: 'A challenge one forsure',
          highlights: 'I found an way to discover the enjoyable parts. It pushed me into a new level of effort, my hands are sore.',
          pitfalls: 'I pitt-fell a few times.',
          blerb: 'I went to a meetup and am on this get-in-shape journey and found that it was inspiring to be with others who really knew what they were doing and looking out for my wellbeing being on the face!',
          conditionType: 'Slippery Hands no chalk'
        },
        {
          title: 'This was a good experience',
          highlights: 'This was a great experience',
          pitfalls: 'There were falling rocks',
          blerb: 'Blerbing about that sick crag a top the crux',
          conditionType: 'Perfecto!'
        },
        {
          title: 'I found my stride!',
          highlights: 'got to a good speed of getting to the points that reuired the ultimate success',
          pitfalls: 'The lady at the front desk was rude when signing up for a membership.',
          blerb: 'I was with my family and we were all enthralled by the facilities.',
          conditionType: 'Lots of chalk on the wall, safe conditions'
        },
        {
          title: 'A new way to look at the climb and look at the route and get the ultimate plan of action.',
          highlights: 'I met a cute girl and we bonded on the rocks!',
          pitfalls: 'We Pit-fell in love.',
          blerb: 'Not much more to it',
          conditionType: 'Love was in the air.. bdmmm ..tssssss'
        },
        {
          title: 'A loborious time',
          highlights: 'The climb sucked, no highlights... should have gone to a different spot.',
          pitfalls: 'no hand or footholds, wayy above my level',
          blerb: '',
          conditionType: 'Wet'
        }
      ]);
    });
};
