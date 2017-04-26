'use strict'

const router = require('koa-router')(),
    user = require('../../models/users'),
    parse = require('co-body');

function *getUsers() {
    try {
        let result = yield user.getAllUsers();
        this.status = 200;
        this.body = result;
    } catch (err) {
        console.log(err);
        this.status = 500;
        this.body = {error: err.message}
    }
}
function *saveUser() {
    try {
        let activity = yield parse(this);
        yield user.saveUser(id,username,email,password);
        this.status = 201;
    }  catch (err) {
        console.log(err);
        this.status = 500;
        this.body = {error: err.message}
    }
}

module.exports = {
    getUsers: getUsers,
    saveUser:saveUser
}