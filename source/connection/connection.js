'use strict';

const config = require('./config');
const knex = require('knex');

const db = knex({
  client: config.CLIENT,
  debug: config.DEBUG,
  acquireConnectionTimeout: config.TIMEOUT,
  connection: {
    host: config.HOST,
    user: config.USER,
    password: config.PASSWORD,
    db: config.DB_NAME,
    local_infile: config.LOCAL_INFILE,
  },
  pool: {
    min: config.POOL_MIN,
    max: config.POOL_MAX,
    idleTimeout: config.POOL_IDLE_TIMEOUT,
    syncInterval: config.POOL_SYNC_INTERVAL,
  },
});

function getDb() {
  return db;
}

module.exports = {
  getDb,
};
