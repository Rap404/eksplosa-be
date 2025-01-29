'use strict';

/**
 * `provinsis-populate` middleware
 */

const populate = {
  bahasas: true,
  fakta_menariks: true,
}

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In provinsis-populate middleware.');

    if(!ctx.query.populate) {
      ctx.query.populate = populate
    }

    await next();
  };
};
