const Router = require('koa-router');
const router = new Router();

const Badge = require('../db/badge.js');
const API_URL = '/badge';

router.get(API_URL, async(ctx) => {
  try {
    const Badge = await Badge.getAll();
    ctx.body = {
      status: 'success',
      data: badge
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
    const Badge = await Badge.get(ctx.params.id);
    if (badge.length) {
      ctx.body = {
        status: 'success',
        data: badge
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
    const Badge = await Badge.create(ctx.request.body);
    if (badge.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: badge
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
    const Badge = await Badge.create(ctx.params.id, ctx.params.body);
    if(badge.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: badge
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
    const Badge = await Badge.delete(ctx.params.id);
    if(badge.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: badge
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
