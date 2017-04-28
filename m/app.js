'use strict';

const Koa = require("koa"),
      app = new Koa(),
      config = require('./config/config'),
      mount = require('koa-mount'),
      cors = require('koa-cors'),
      bodyParser = require('koa-bodyparser'),
      json = require('koa-json'),
      route = require('koa-route'),
      ENV = require('./lib/env'),
      passport = require('koa-passport'),
      session = require('koa-session'),
      MetricsCtrl = require('./controllers/metrics'),
      FixedCostsCtrl = require('./controllers/fixed_costs'),
      CurrencyCtrl = require('./controllers/currency'),
      CategoryCtrl = require('./controllers/category'),
      protected_resource = require('./controllers/auth/passport').protected_resource,
      TariffCtrl = require('./controllers/tariff');

require('./controllers/auth/passport');





app.use(json());

app.keys = ['secret', 'key'];

app.use(cors({origin: true, credentials: true}));

app.use(session({}, app));

// authentication
app.use(passport.initialize());
app.use(passport.session());


app.use(bodyParser(config.BODY_PARSER));

app.use(route.post('/login', function(ctx, next) {
  return passport.authenticate('local', function(err, user, info, status) {
    if (user === false) {
      ctx.body = { success: false }
      ctx.throw(401);
    } else {
      ctx.body = { success: true }
      return ctx.login(user);
    }
  })(ctx, next);
}));


app.use(route.get('/logout', function(ctx) {
  ctx.logout();
  ctx.redirect('/');
}));

app.use(route.get('/metrics', MetricsCtrl.getAll));

module.exports = app;


app.listen(ENV.PORT);

console.log("I am listening at port ", ENV.PORT);
console.log("Environment ", ENV.name);