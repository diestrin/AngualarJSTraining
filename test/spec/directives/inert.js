'use strict';

describe('Directive: inert', function () {

  // load the directive's module
  beforeEach(module('BluetoothApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<inert></inert>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the inert directive');
  }));
});
