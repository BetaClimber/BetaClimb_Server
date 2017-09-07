const Koa = require('koa');
const App = new Koa();


const Routes = require('koa-route');

// App.use(async (ctx) => {
//   ctx.body = 'Learning a new backend framework!';
// })

const routes = {
  index: async  (ctx) => {
    ctx.body = 'This is the home-page.';
  },
  about: async (ctx) => {
    ctx.body = 'This is the about-page.'
  }
}

App.use(Routes.get('/', routes.index));
App.use(Routes.get('/about', routes.about));



const PORT = 3000;
App.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`);
})
