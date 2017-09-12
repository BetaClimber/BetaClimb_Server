const Koa = require('koa');
const app = new Koa();

// middleware
const bodyParser = require('koa-bodyparser');
const dotEnv = require('dotenv').config();

app.use(bodyParser());

// routes
const index = require('./routes/index');
const panoramic = require('./routes/panoramic');
const route = require('./routes/route');
const location = require('./routes/location');
const log = require('./routes/log');
const videoKeys = require('./routes/videoKeys');
const condition = require('./routes/condition');
const note = require('./routes/note');
const badge = require('./routes/badge');

app.use(index.routes());
app.use(panoramic.routes());
app.use(route.routes());
app.use(location.routes());
app.use(log.routes());
app.use(videoKeys.routes());
app.use(condition.routes());
app.use(note.routes());
app.use(badge.routes());

const PORT = 3000 || process.env.PORT;
const server = app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});

module.exports = server;
