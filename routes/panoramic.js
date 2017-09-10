const Router = require('koa-router');
const router = new Router();

const panoramic = require('../db/panoramic');
const API_URL = '/panoramic';

router.get(API_URL, async(ctx) => {
  try {
    const Pan = await panoramic.getAll();
    ctx.body = {
      status: 'success',
      data: Pan
    };
  } catch (err) {
    ctx.status = 404;
    ctx.body = {
      status: 'error',
      message: err.message || 'Oops, Something we wrong...'
    };
  }
});

router.get(`${API_URL}/:id`, async(ctx) => {
  try {
    const Pan = await panoramic.get(ctx.params.id);
    if (panoramic) {
      ctx.body = {
        status: 'success',
        data: Pan
    };
  } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
      }
  }
  } catch (err) {
    ctx.status = 404;
    ctx.body ={
      status: 'error',
      message: err.message || 'Oops, Something we wrong...'
    };
  }
});

router.post(`${API_URL}`, async (ctx) => {
  try {
    const Pan = await panoramic.create(ctx.request.body);
    if (panoramic) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: Pan
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
      };
    }
  } catch (err) {
    ctx.status = 404;
    ctx.body = {
      status: 'error',
      message: err.message || 'Oops, something we wrong...'
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
        status: 'error',
      };
    }
  } catch (err) {
    ctx.status = 404;
    ctx.body = {
      status: 'error',
      message: err.message || 'Oops, something we wrong...'
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
        status: 'error',
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
