'use strict';

/**
 * `bahasas-populate` middleware
 */

const populate = {
  provinsis: true,
  levels: true
}


module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In bahasas-populate middleware.');

    if (!ctx.query.populate){
      ctx.query.populate = populate
    }

    await next();
  };
};
