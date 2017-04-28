/**
 * Created by kirill.bokhanov on 3/25/17.
 */
/**
 * Created by kirill.bokhanov on 3/25/17.
 */
'use strict';
const knex = require('../connection/pg-connection'),
  TABLE_NAME = 'app_user';

class User{
  static getAll(){
    return knex.select().from(TABLE_NAME);
  }
  static getOneByEmail(email){
    return knex.select().from(TABLE_NAME).where('email', email);
  }
}

module.exports = User;
