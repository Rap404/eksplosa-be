'use strict';

/**
 * provinsi router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::provinsi.provinsi', {
  config: {
    find: {
      middlewares: ['api::provinsi.provinsis-populate']
    },
    findOne: {
      middlewares: ['api::provinsi.provinsis-populate']
    }
  }
});
