'use strict';

/**
 * alternative router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::alternative.alternative');
