const Router = require('koa-router');
const router = new Router();

const Location = require('../db/location.js');
const API_URL = '/location';

router.get(API_URL, async(ctx) => {
  try {
    const location = await Location.getAll();
    ctx.body = {
      status: 'success',
      data: location
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
    const location = await Location.get(ctx.params.id);
    if (location.length) {
      ctx.body = {
        status: 'success',
        data: location
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
    const location = await Location.create(ctx.request.body);
    if (location.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: location
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
    const location = await Location.create(ctx.params.id, ctx.params.body);
    if(location.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: location
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
    const location = await Location.delete(ctx.params.id);
    if(location.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: location
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
