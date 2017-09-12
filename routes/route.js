const Router = require('koa-router');
const router = new Router();

const Route = require('../db/route.js');
const API_URL = '/climb';

router.get(API_URL, async(ctx) => {
  try {
    const route = await Route.getAll();
    ctx.body = {
      status: 'success',
      data: route
    }
  } catch (err) {
    ctx.status = 404;
    ctx.body = {
      status: 'error',
      message: err.message || 'Oops, Something went wrong..'
    };
  }
});

router.get(`${API_URL}/:id`, async(ctx) => {
  try {
    const route = await Route.getOne(ctx.params.id);
    if (route) {
      ctx.body = {
        status: 'success',
        data: route
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
      message: err.message || 'Oops, something went wrong...'
    }
  }
});

router.post(`${API_URL}`, async (ctx) => {
  try {
    const route = await Route.create(ctx.request.body);
    if (route) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: route
      }
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
      message: err.message || 'Oops, something went wrong...'
    }
  }
});

router.put(`${API_URL}/:id`, async (ctx) => {
  try {
    const route = await Route.create(ctx.params.id, ctx.params.body);
    if (route) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: route
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
    const route = Route.delete(ctx.params.id);
    if (route.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: route
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
      message: err.message || 'Oops, something went wrong...'
    }
  }
});

module.exports = router;
