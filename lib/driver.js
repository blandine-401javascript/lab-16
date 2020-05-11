'use strict';

const emitter = require('./events.js');

const delivery= require('./handler.js').driverDeliveredHandler;
const pickup = require('./handler.js').driverPickupHandler;


const goOutForDelivery = (payload) => {
  emitter.emit('in-transit', `${payload.id}`);
  setTimeout(() => {
    emitter.emit('delivered', payload);
  }, 1000);
};

// attach handlers with listeners
emitter.on('pickup', pickup);
emitter.on('pickup', goOutForDelivery);
emitter.on('delivered', delivery);
