'use strict';

/**
 * bahasa router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::bahasa.bahasa', {
  config: {
    find: {
      middlewares: ['api::bahasa.bahasas-populate']
    },
    findOne: {
      middlewares: ['api::bahasa.bahasas-populate']
    }
  }
});
