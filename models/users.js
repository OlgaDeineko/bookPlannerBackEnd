'use strict'
var knex = require('../pg-connection');


class Users {
  static *getAllUsers() {
    return  yield knex.select('*').from('users');
  }
  static *saveUser(user_data) {
    // let insert_data = {id:id,username:username,email:email,password:password};
    return  yield knex('users').insert(user_data);
  }

}
module.exports = Users;