
'use strict';
var ENV = process.env.NODE_ENV;
var props ={
  local : {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: '586393',
      database: 'bookplanner',
      port: 5432

    }
  }
};


var configs = props[process.env.NODE_ENV] || props.local;
var knex = require('knex')(configs);


module.exports = knex;