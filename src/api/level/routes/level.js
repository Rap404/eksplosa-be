'use strict';

/**
 * level router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::level.level', {
  config: {
    find: {
      middlewares: ['api::level.levels-populate']
    },
    findOne: {
      middlewares: ['api::level.levels-populate']
    }
  }
});
