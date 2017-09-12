const Router = require('koa-router');
const router = new Router();

const Log = require('../db/log.js');
const API_URL = '/log';

router.get(API_URL, async(ctx) => {
  try {
    const log = await Log.getAll();
    ctx.body = {
      status: 'success',
      data: log
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
    const log = await Log.get(ctx.params.id);
    if (log.length) {
      ctx.body = {
        status: 'success',
        data: log
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
    const log = await Log.create(ctx.request.body);
    if (log.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: log
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
    const log = await Log.create(ctx.params.id, ctx.params.body);
    if(log.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: log
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
    const log = await Log.delete(ctx.params.id);
    if(log.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: log
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
