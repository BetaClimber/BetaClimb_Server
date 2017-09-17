const Router = require('koa-router');
const router = new Router();
const transaction = require('objection').transaction;
const Route = require('../models/Route');
const Note = require('../models/Note');




  router.get('/routes', async (ctx) => {

    const routes = await Route
      .query()
      .eager('notes')
      .skipUndefined()
      .orderBy('id');

      ctx.status = 200;
      ctx.body = routes;
  });

  router.get('/routes/:id/', async (ctx) => {
      const route = await Route
        .query()
        .findById(ctx.params.id);

      if (!route) {
        throwError();
      }

      const notes = await Route
        .query()
        .findById(ctx.params.id)
        .eager('notes');

      ctx.status = 200;
      ctx.body = notes;
  });

  router.post('/routes', async (ctx) => {

    if(!ctx.request.body) {
      throwError();
    }

    let route = await Route
            .query()
            .allowInsert('[notes]')
            .insertGraph(ctx.request.body);

      ctx.status = 200;
      ctx.body = route;
  });


  router.put('/routes/:id', async (ctx) => { //PUT not supported by objection join tables

    if(!ctx.request.body) {
      throwError();
    }

    let route = await Route
            .query()
            .update(ctx.request.body)
            .where('id', ctx.params.id);

      ctx.status = 200;
      ctx.body = route;
  });

  router.delete('/routes/:id', async (ctx) => {
    await Route
      .query()
      .deleteById(ctx.params.id);

      ctx.status = 200;
      ctx.body = {
        message: 'deleted'
      }
  });

// The error thrown by this function is handled in the error handler middleware in index.js.
function throwError() {
  ctx.status = 404;
  throw error;
}

module.exports = router;
