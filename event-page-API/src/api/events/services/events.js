'use strict';

/**
 * events service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::events.events');
