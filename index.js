const Koa = require('koa');
const app = new Koa();

const bodyParser = require('koa-bodyparser');
const dotEnv = require('dotenv').config();
var cors = require('koa-cors');

const Knex = require('knex');
const Model = require('objection').Model;
const knex = require('./db/connection');
Model.knex(knex);

app.use(bodyParser());
app.use(cors());

const climb = require('./routes/climb');
const route = require('./routes/route');
const index = require('./routes/index');
const panoramic = require('./routes/panoramic');
const note = require('./routes/note');
const route_note = require('./routes/route_note');

app.use(route.routes());
app.use(climb.routes());
app.use(index.routes());
app.use(panoramic.routes());
app.use(note.routes());
app.use(route_note.routes());

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});

module.exports = server;
