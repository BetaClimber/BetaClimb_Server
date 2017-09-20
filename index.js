const Koa = require('koa');
const app = new Koa();

// middleware
const bodyParser = require('koa-bodyparser');
const dotEnv = require('dotenv').config();
var cors = require('koa-cors');

// ORM and DB Query Config
const Knex = require('knex');
const knexConfig = require('./knexfile');
const Model = require('objection').Model;
const knex = Knex(knexConfig.development);

Model.knex(knex);

app.use(bodyParser());
app.use(cors());

// routes
const climb = require('./routes/climb');
const route = require('./routes/route');
const index = require('./routes/index');
const panoramic = require('./routes/panoramic');
const note = require('./routes/note');

app.use(route.routes());
app.use(climb.routes());
app.use(index.routes());
app.use(panoramic.routes());
app.use(note.routes());


const PORT = 3000 || process.env.PORT;
const server = app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});

module.exports = server;
