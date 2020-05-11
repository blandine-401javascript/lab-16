'use strict';

const handler = require('../lib/handler.js');

let consoleSpy = jest.spyOn(console, 'log');

describe('Handler', () => {
  it('can log pickup handler', () => {
    consoleSpy.mockClear();

    let payload = {
      time: '5 May',
      store:'blandine INC',
      id: 2222,
      customer: 'Siland',
      address: 'Tacoma',
    };

    handler.driverPickupHandler(payload);
    expect(consoleSpy).toHaveBeenCalled(`DRIVER picked up order ${payload.id}`);
  });

  it('can log inTransitHandler', () => {
    consoleSpy.mockClear();

    let payload = {
      time: '5 May',
      store:'blandine INC',
      id: 2222,
      customer: 'Siland',
      address: 'Tacoma',
    };

    handler.driverDeliveredHandler(payload);
    setTimeout(() => {
      expect(consoleSpy).toHaveBeenCalledWith(`Delivered order ${payload.id}`);
    }, 3000);
  });

  it('can log vendor handler', () => {
    consoleSpy.mockClear();
    let payload = {
      time: '5 May',
      store:'blandine INC',
      id: 2222,
      customer: 'Siland',
      address: 'Tacoma',
    };

    handler.vendorDeliveredHandler(payload);
    setTimeout(() => {
      expect(consoleSpy).toHaveBeenCalledWith(`Vendor thanks for delivering order ${payload.id}`);
    }, 5000);
  });

  it('can log in transit order logger', () => {
    consoleSpy.mockClear();
    let payload = {
      time: '5 May',
      store:'blandine INC',
      id: 2222,
      customer: 'Siland',
      address: 'Tacoma',
    };

    handler.inTransitOrderLogger(payload);
    expect(consoleSpy).toHaveBeenCalledWith(`EVENT in-transit ${payload.id}`);
  });

});
