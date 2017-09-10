const Koa = require('koa');
const app = new Koa();

// middleware
const bodyParser = require('koa-bodyparser');
const dotEnv = require('dotenv').config();

app.use(bodyParser());

// routes
const index = require('./routes/index');
const panoramic = require('./routes/panoramic');

app.use(index.routes());
app.use(panoramic.routes());

const PORT = 3000 || process.env.PORT;
const server = app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});

module.exports = server;
