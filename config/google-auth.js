/**
 * Created by kirill.bokhanov on 3/26/17.
 */
var ENV = require('../lib/env');

var envs = {

  local: {
    clientId: '909563452386-94jvhiorio2m4vjqk9m8o3fi8sb4bpu3.apps.googleusercontent.com',
    clientSecret: 'r9dnRdO-78k4tmE1jTdc4Ngk',
    skipProfile:false,
    callbackURL: 'http://localhost:3001/api/auth/google/callback',
    successUrl: 'http://localhost:3001'
  },

  test: {
    clientId: '909563452386-94jvhiorio2m4vjqk9m8o3fi8sb4bpu3.apps.googleusercontent.com',
    clientSecret: 'r9dnRdO-78k4tmE1jTdc4Ngk',
    skipProfile:false,
    callbackURL: 'http://localhost:3001/api/auth/google/callback',
    successUrl: 'http://localhost:3001'
  },

  dev: {
    clientId: '909563452386-94jvhiorio2m4vjqk9m8o3fi8sb4bpu3.apps.googleusercontent.com',
    clientSecret: 'r9dnRdO-78k4tmE1jTdc4Ngk',
    skipProfile:false,
    callbackURL: 'http://inspector-api-dev.ironbeast.io/api/auth/google/callback',
    successUrl: 'http://inspector-dev.ironbeast.io'
  },

  staging: {
    clientId: '909563452386-94jvhiorio2m4vjqk9m8o3fi8sb4bpu3.apps.googleusercontent.com',
    clientSecret: 'r9dnRdO-78k4tmE1jTdc4Ngk',
    skipProfile:false,
    callbackURL: 'https://console-api-stg.atom-data.io/api/auth/google/callback',
    successUrl: 'https://console-stg.atom-data.io'
  },

  prod: {
    clientId: '909563452386-94jvhiorio2m4vjqk9m8o3fi8sb4bpu3.apps.googleusercontent.com',
    clientSecret: 'r9dnRdO-78k4tmE1jTdc4Ngk',
    skipProfile:false,
    callbackURL: 'http://inspector-api.ironbeast.io/api/auth/google/callback',
    successUrl: 'http://inspector.ironbeast.io'
  }

};


var env = envs[ENV.name];

if (ENV.PRODUCT == 'atom') {
  env.callbackURL = 'https://console-api.atom-data.io/api/auth/google/callback';
  env.successUrl = 'https://atom.ironsrc.com';
}


module.exports = env;


