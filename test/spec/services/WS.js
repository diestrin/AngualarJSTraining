'use strict';

describe('Service: WS', function () {

  // load the service's module
  beforeEach(module('BluetoothApp'));

  // instantiate service
  var WS;
  beforeEach(inject(function (_WS_) {
    WS = _WS_;
  }));

  it('should do something', function () {
    expect(!!WS).toBe(true);
  });

});
