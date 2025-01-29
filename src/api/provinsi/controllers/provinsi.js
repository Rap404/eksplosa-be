'use strict';

/**
 * provinsi controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::provinsi.provinsi', ({strapi}) => ({
  async find(ctx) {
    const entities = await strapi.entityService.findMany('api::provinsi.provinsi', {
      ...ctx.query,
    });

    return this.transformResponse(entities);
  },

  async findOne(ctx) {
    const { id } = ctx.params;

    try{
      const entity = await strapi.db.query('api::provinsi.provinsi').findOne({
        where: { id: id },
        ...ctx.query
      });

      if(!entity) {
        return ctx.notFound('Provinsi not found')
      }

      return this.transformResponse(entity);
    } catch (error) {
      strapi.log.error('Error fetching entity: ', error)
      return ctx.internalServerError("Internal server error")
    }
  }
}));
