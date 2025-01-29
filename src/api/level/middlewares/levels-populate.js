'use strict';

/**
 * `levels-populate` middleware
 */

const populate = {
  soals: true,
  bahasas: true,
}

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In levels-populate middleware.');

    if(!ctx.query.populate) {
      ctx.query.populate = populate
    }

    await next();
  };
};
