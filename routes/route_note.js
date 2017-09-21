const Router = require('koa-router');
const router = new Router();

const Route_Note = require('../db/routeNote');
const API_URL = '/route/notes';

router.get(API_URL, async(ctx) => {
  try {
    const route_note = await Route_Note.getAll();
    ctx.body = {
      status: 'success',
      data: route_note
    };
  } catch (err) {
    ctx.status = 404;
    ctx.body = {
      status: 'error',
      message: err.message || 'Oops, Something went wrong...'
    };
  }
});

router.get(`${API_URL}/:id`, async(ctx) => {
  try {
    const route_note = await Route_Note.getOne(ctx.params.id);
    if (route_note) {
      ctx.body = {
        status: 'success',
        data: route_note
    };
  } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error'
      }
    }
  } catch (err) {
    ctx.status = 404;
    ctx.body = {
      status: 'error',
      message: err.message || 'Oops, Something went wrong...'
    };
  }
});

router.post(`${API_URL}`, async (ctx) => {
  try {
    const route_note = await Route_Note.create(ctx.request.body);
    if (route_note.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: route_note
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error'
      };
    }
  } catch (err) {
    ctx.status = 404;
    ctx.body = {
      status: 'error',
      message: err.message || 'Oops, something went wrong...'
    };
  }
});

router.delete(`${API_URL}/:id`, async (ctx) => {
  try {
    const route_note = await Route_Note.delete(ctx.params.id);
    if(note.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: route_note
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error'
      };
    }
  } catch (err) {
    ctx.status = 404;
    ctx.body = {
      status: 'error',
      message: err.message || 'Oops, something went wrong...'
    };
  }
});

module.exports = router;
