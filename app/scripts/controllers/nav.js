'use strict';

angular.module('BluetoothApp')
  .controller('NavCtrl', function ($scope, WS, $location, $routeParams) {
    var vehicleQuery, deviceQuery;

    var init = function () {
      vehicleQuery = $routeParams.radio ? {
        make: $routeParams.make,
        year: $routeParams.year,
        model: $routeParams.model,
        radio: $routeParams.radio,
      } : {};

      deviceQuery = $routeParams.device ? {
        carrier: $routeParams.carrier,
        manufacturer: $routeParams.manufacturer,
        device: $routeParams.device
      } : {};

      $scope.carriers = WS.Devices.carriers.get(vehicleQuery);
      $scope.makes = WS.Vehicles.makes.get(deviceQuery);
    };

    $scope.updateCarrier = function () {
      $scope.devices = [];
      $scope.manufacturer = undefined;
      $scope.device = undefined;

      $scope.manufacturers = WS.Devices.manufacturers.get(angular.extend({
        carrier: $scope.carrier.name
      }, vehicleQuery));
    };

    $scope.updateManufacturer = function () {
      $scope.device = undefined;

      $scope.devices = WS.Devices.devices.get(angular.extend({
        carrier: $scope.carrier.name,
        manufacturer: $scope.manufacturer.name
      }, vehicleQuery));
    };

    $scope.setDevice =  function () {
      var vehiclePath = '';

      if ($routeParams.make) {
        vehiclePath = '/vehicle/' + [
          $routeParams.make,
          $routeParams.year,
          $routeParams.model,
          $routeParams.radio,
          $routeParams.navigation,
        ].join('/');
      }

      $location.path('/device/' + [
        $scope.carrier.name,
        $scope.manufacturer.name,
        $scope.device.name
      ].join('/') + vehiclePath);

      deviceQuery = {
        carrier: $scope.carrier.name,
        manufacturer: $scope.manufacturer.name,
        device: $scope.device.name
      };

      $scope.makes = WS.Vehicles.makes.get(deviceQuery);
    };

    $scope.updateMake = function () {
      $scope.models = [];
      $scope.year = undefined;
      $scope.model = undefined;
      $scope.radio = undefined;
      $scope._radio = undefined;

      $scope.years = WS.Vehicles.years.get(angular.extend({
        make: $scope.make.name
      }, deviceQuery));
    };

    $scope.updateYear = function () {
      $scope.model = undefined;
      $scope.radio = undefined;
      $scope._radio = undefined;

      $scope.models = WS.Vehicles.models.get(angular.extend({
        make: $scope.make.name,
        year: $scope.year.value
      }, deviceQuery));
    };

    $scope.updateModel = function () {
      $scope._radio = undefined;
      $scope.radio = undefined;
    }

    $scope.updateRadio = function () {
      angular.forEach($scope.model.radios, function(radio, index){
        if ($scope._radio === radio.radioID) {
          $scope.radio = radio;
          return false;
        }
      });
    };

    $scope.setVehicle =  function () {
      var devicePath = '';

      if ($routeParams.device) {
        devicePath = '/device/' + [
          $routeParams.carrier,
          $routeParams.manufacturer,
          $routeParams.device
        ].join('/');
      }

      $location.path(devicePath + '/vehicle/' + [
        $scope.make.name,
        $scope.year.value,
        $scope.model.model,
        $scope.radio.typeRadio,
        $scope.radio.hasNavigation === 'true' ? 'navigation' : 'noNavigation'
      ].join('/'));

      vehicleQuery = {
        make: $scope.make.name,
        year: $scope.year.value,
        model: $scope.model.model,
        radio: $scope.radio.typeRadio
      };

      $scope.carriers = WS.Devices.carriers.get(vehicleQuery);
    };

    $scope.$on('$routeChangeSuccess', init);
  });
