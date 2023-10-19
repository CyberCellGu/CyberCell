'use strict';

/**
 * events controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::events.events');
