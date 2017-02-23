'use strict';

const ctools = require('cloud-tools');

const env = ctools.config.env;
const bool = ctools.config.bool;
const check = ctools.config.check;

const config = {
  CLIENT: 'maria',
  HOST: env('RDS_HOSTNAME'),
  USER: env('RDS_USERNAME'),
  PASSWORD: env('RDS_PASSWORD'),
  DB_NAME: env('RDS_DB_NAME'),
  DEBUG: bool('RDS_DEBUG', false),
  TIMEOUT: env('RDS_ACQUIRE_CONNECTION_TIMEOUT', 10000),
  LOCAL_INFILE: true,
  POOL_MIN: env('RDS_POOL_MIN', 0),
  POOL_MAX: env('RDS_POOL_MAX', 10),
  POOL_IDLE_TIMEOUT: env('RDS_IDLE_TIMEOUT', 10 * 60 * 1000),
  POOL_SYNC_INTERVAL: env('RDS_SYNC_INTERVAL', 5 * 60 * 1000),
};

check();

module.exports = config;
