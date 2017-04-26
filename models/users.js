'use strict'
var knex = require('../pg-connection');


class Users {
  static *getAllUsers() {
    return  yield knex.select('*').from('users');
  }
  static *saveUser(id,username,email,password) {
    return  yield knex('users').insert({id:id,username:username,email:email,password:password});
  }

}
module.exports = Users;