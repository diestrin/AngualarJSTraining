'use strict';

angular.module('BluetoothApp')
  .controller('DevicesCtrl', function ($scope, WS) {
    $scope.devices = WS.Devices.devices.get();
  });
