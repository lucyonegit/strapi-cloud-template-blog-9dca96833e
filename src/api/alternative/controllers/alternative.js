'use strict';

/**
 * alternative controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::alternative.alternative');
