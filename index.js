const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const index = require('./routes/index');

const App = new Koa();

App.use(bodyParser());

App.use(index.routes());
// App.use(about.routes());

const PORT = process.env.PORT || 3000;

App.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`);
});
