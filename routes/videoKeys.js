const Router = require('koa-router');
const router = new Router();

const VKey = require('../db/videoKeys.js');
const API_URL = '/vkey';

router.get(API_URL, async(ctx) => {
  try {
    const vkey = await VKey.getAll();
    ctx.body = {
      status: 'success',
      data: vkey
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
    const vkey = await VKey.getOne(ctx.params.id);
    if (vkey) {
      ctx.body = {
        status: 'success',
        data: vkey
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
    const vkey = await VKey.create(ctx.request.body);
    if (vkey) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: vkey
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
    const vkey = await VKey.create(ctx.params.id, ctx.params.body);
    if(vkey) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: vkey
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
    const vkey = await VKey.delete(ctx.params.id);
    if(vkey.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: vkey
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
