'use strict';
const emitter = require('./events.js');
const faker = require('faker');
const handler = require('./handler.js').vendorDeliveredHandler;



emitter.on ('delivered', handler);

setInterval(() => {
  let customer = {
    store: 'My Flower Shop',
    id: faker.random.uuid(),
    name: faker.name.firstName() + ' ' + faker.name.lastName(),
    address:
      faker.address.streetAddress() +
      ' ' +
      faker.address.secondaryAddress(),
  };
  emitter.emit('pickup', customer);

}, 500);
