'use strict';

var ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'prod';


class Env {

  get name() {
    return ENV;
  }

  get isProduction() {
    return ENV == 'prod';
  }

  get isntProduction() {
    return ENV != 'prod';
  }

  get isLocal() {
    return ENV == 'local';
  }

  get isntLocal() {
    return ENV != 'local';
  }


  get PORT() {
    return process.env.PORT ? process.env.PORT : 3000;
  }

  get BASE_URL() {
    let ret = {
      local: 'http://localhost:3000'
    };
    return ret[ENV];
  }
}

module.exports = new Env();