'use strict';

/**
 * bahasa controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::bahasa.bahasa', ({strapi}) => ({
  async find(ctx) {
    const entities = await strapi.entityService.findMany('api::bahasa.bahasa', {
      ...ctx.query,
    });

    return this.transformResponse(entities);
  },

  async findOne(ctx) {
    const { id } = ctx.params;

    try{
      const entity = await strapi.db.query('api::bahasa.bahasa').findOne({
        where: { id: id },
        ...ctx.query
      });

      if(!entity) {
        return ctx.notFound('Jawaban not found')
      }

      return this.transformResponse(entity);
    } catch (error) {
      strapi.log.error('Error fetching entity: ', error)
      return ctx.internalServerError("Internal server error")
    }
  }
}));
