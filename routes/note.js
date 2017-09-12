const Router = require('koa-router');
const router = new Router();

const Note = require('../db/note.js');
const API_URL = '/note';

router.get(API_URL, async(ctx) => {
  try {
    const note = await Note.getAll();
    ctx.body = {
      status: 'success',
      data: note
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
    const note = await Note.get(ctx.params.id);
    if (note.length) {
      ctx.body = {
        status: 'success',
        data: note
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
    const note = await Note.create(ctx.request.body);
    if (note.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: note
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
    const note = await Note.create(ctx.params.id, ctx.params.body);
    if(note.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: note
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
    const route = await Note.delete(ctx.params.id);
    if(note.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: note
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
