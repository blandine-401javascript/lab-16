'use strict';
const emitter = require('./events.js');
const faker = require('faker');
const handler = require('./handler.js').vendorDeliveredHandler;



emitter.on ('delivered', handler);

setInterval(() => {
  let order = {
    time: faker.date.recent(),
    store: faker.company.companyName(),
    orderId: faker.random.number(),
    customer: faker.name.findName(),
    address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.zipCode()}`,

  };
  emitter.emit('pickup', order);

}, 500);
