const Router = require('koa-router');
const router = new Router();

const panoramic = require('../db/panoramic');
const API_URL = '/panoramic';

router.get(API_URL, async(ctx) => {
  try {
    const PAN = await panoramic.getAll();
    ctx.body = {
      status: 'success',
      data: PAN
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
    const PAN = await panoramic.get(ctx.params.id);
    if (PAN.length) {
      ctx.body = {
        status: 'success',
        data: PAN
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
    const PAN = await panoramic.create(ctx.request.body);
    if (PAN.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: PAN
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

router.put(`${API_URL}/:id`, async (ctx) => {
  try {
    const PAN = await panoramic.update(ctx.params.id, ctx.request.body);
    if (PAN.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: PAN
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
    }
  }
});

router.delete(`${API_URL}/:id`, async (ctx) => {
  try {
    const PAN = await panoramic.delete(ctx.params.id);
    if(PAN.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: PAN
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
