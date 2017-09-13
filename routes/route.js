const Router = require('koa-router');
const router = new Router();
const transaction = require('objection').transaction;
const Route = require('../models/Route');
const Note = require('../models/Note');


  // transaction:
  // You can pass relations with the route and they also get inserted.

  router.post('/routes', async (ctx) => {
    const route = await Route
      .query()
      .allowInsert('[children.[notes], notes, parent]')
      .insertGraph(ctx.params.body);

    ctx.status = 200;
    ctx.body = {
      data: route
    };
  });


  router.get('/routes/:id/', async (ctx) => {
      const route = await Route
        .query()
        .findById(ctx.params.id);

      if (!route) {
        throwNotFound();
      }

      // We don't need to check for the existence of the query parameters because
      // we call the `skipUndefined` method. It causes the query builder methods
      // to do nothing if one of the values is undefined.
      const notes = await Route
        // .$relatedQuery('notes');

      ctx.status = 200;
      ctx.body = {
        data: notes
      }
  });

  router.get('/routes', async (ctx) => {

    const routes = await Route
      .query()
      .allowEager('[children.[notes], notes]')
      .eager(ctx.query.eager)
      .skipUndefined();

      ctx.status = 200;
      ctx.body = {
        data: routes
      };
  });



  router.delete('/routes/:id', async (ctx) => {
    await Route
      .query()
      .deleteById(ctx.params.id);

      ctx.status = 200;
      ctx.body = {
        data: 'deleted'
      };
  });

// The error thrown by this function is handled in the error handler middleware in index.js.
function throwNotFound() {
  ctx.status = 404;
  throw error;
}

module.exports = router;
