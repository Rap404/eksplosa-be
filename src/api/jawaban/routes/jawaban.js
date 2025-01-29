'use strict';

/**
 * jawaban router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::jawaban.jawaban', {
  config: {
    find: {
      middlewares: ['api::jawaban.jawabans-populate'],
    },
    findOne: {
      middlewares: ['api::jawaban.jawabans-populate']
    }
  }
});
