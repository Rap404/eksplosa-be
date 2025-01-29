'use strict';

/**
 * `soals-populate` middleware
 */

const populate = {
  bahasa: true,
  jawabans: true,
  level: true,
}

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In soals-populate middleware.');

    if(!ctx.query.populate) {
      ctx.query.populate = populate
    }

    await next();
  };
};
