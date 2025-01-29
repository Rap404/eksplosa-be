'use strict';

/**
 * `fakta-menariks-populate` middleware
 */

const populate = {
  provinsi: true,
  gambar: true,
}

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In fakta-menariks-populate middleware.');

    if (!ctx.query.populate){
      ctx.query.populate = populate
    }

    await next();
  };
};
