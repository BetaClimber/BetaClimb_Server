const Router = require('koa-router');
const router = new Router();

const Condition = require('../db/condition');
const API_URL = '/condition';

router.get(API_URL, async(ctx) => {
  try {
    const condition = await Condition.getAll();
    ctx.body = {
      status: 'success',
      data: condition
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
    const condition = await Condition.getOne(ctx.params.id);
    if (condition) {
      ctx.body = {
        status: 'success',
        data: condition
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
    const condition = await Condition.create(ctx.request.body);
    if (condition.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: condition
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
    const condition = await Condition.update(ctx.params.id, ctx.request.body);
    if (condition) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: condition
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
    const condition = await Condition.delete(ctx.params.id);
    if (condition.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: condition
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
