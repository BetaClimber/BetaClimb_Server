const Router = require('koa-router');
const router = new Router();

const Climb = require('../db/climb');
const API_URL = '/climbs';

router.get(API_URL, async(ctx) => {
  try {
    const climb = await Climb.getAll();
    ctx.body = {
      status: 'success',
      data: climb
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
    const climb = await Cimb.getOne(ctx.params.id);
    if(climb) {
      ctx.body = {
        status: 'success',
        data: climb
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
    const climb = await Climb.create(ctx.request.body);
    if(climb.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: climb
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
    const climb = await Cimb.update(ctx.params.id, ctx.request.body);
    if(climb) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: climb
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
    const climb = await Cimb.delete(ctx.params.id);
    if (climb.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: climb
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
