'use strict';

/**
 * soal router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::soal.soal', {
  config: {
    find: {
      middlewares: ['api::soal.soals-populate']
    },
    findOne: {
      middlewares: ['api::soal.soals-populate']
    }
  }
});
