'use strict';

/**
 * `jawabans-populate` middleware
 */

const populate = {
  bahasa: true,
  soals: true,
}

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In jawabans-populate middleware.');

    if (!ctx.query.populate){
      ctx.query.populate = populate
    }

    await next();
  };
};
