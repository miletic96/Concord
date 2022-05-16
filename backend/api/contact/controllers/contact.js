'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

 const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

 module.exports = {
    async custom(ctx) {
      let entity;
      if (ctx.is('multipart')) {
        const { data, files } = parseMultipartData(ctx);
        entity = await strapi.services.contact.create(data, { files });
      } else {
        entity = await strapi.services.contact.create(ctx.request.body);
      }
  
      entity = sanitizeEntity(entity, { model: strapi.models.contact });
  
        // send an email by using the email plugin
        await strapi.plugins['email'].services.email.send({
          to: 'milanmiletic1996@gmail.com',
          from: 'info@concord-medialtd.com',
          subject: 'Concord Media Ltd Contact',
          text: `
            Name: ${entity.name} 
            Email: ${entity.email}
            Phone: ${entity.phone}
            Business: ${entity.business}
            Position: ${entity.position}
          `,
        });
      
  
      return entity;
    }
  };
   