'use strict';

const koa = require('koa'),
      cors = require('koa-cors'),
      app  = koa(),
      mount = require('koa-mount'),
      route = require('koa-route'),
      parse = require('co-body'),
      // booksController = require('./components/books/books.ctrl.js');
      usersController = require('./components/users/users.ctrl.js');

//  function *allowCrossDomain(req, res, next) {
//   res.header('Access-Control-Allow-Origin', "*");
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// }
// app.use(allowCrossDomain);
app.use(cors());
app.use(route.get("/users", usersController .getUsers));
app.use(route.post("/saveUser", usersController .saveUser));
// app.use(route.del("/delete", userActivityController.deleteUserActivity));


var port = process.env.PORT||3000;
app.listen(port);
console.log("Aplication started work on port 3000");

module.exports = app;
