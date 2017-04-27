'use strict'
var knex = require('../pg-connection');


class Users {
  static *getAllUsers() {
    return  yield knex.select('*').from('users');
  }
  static *saveUser(user_data) {
    return  yield knex('users').insert(user_data);
  }
  static *getUsersEmail(email) {
    return  yield knex.select().from('users').where('email','=', email);
  }

}
module.exports = Users;