'use strict';

angular.module('BluetoothApp')
  .controller('MainCtrl', function ($scope, $routeParams, WS) {
    var queryFeatures = {};
    $routeParams.carrier && (queryFeatures.carrier = $routeParams.carrier);
    $routeParams.manufacturer && (queryFeatures.manufacturer = $routeParams.manufacturer);
    $routeParams.device && (queryFeatures.device = $routeParams.device);
    $routeParams.make && (queryFeatures.make = $routeParams.make);
    $routeParams.model && (queryFeatures.model = $routeParams.model);
    $routeParams.radio && (queryFeatures.radio = $routeParams.radio);
    $routeParams.year && (queryFeatures.year = $routeParams.year);
    // $routeParams.navigation && queryFeatures.navigation = $routeParams.navigation === 'navigation';

    if ($routeParams.device || $routeParams.radio) {
      $scope.features = WS.Features.get(queryFeatures);
    }

    if ($routeParams.device && !$routeParams.radio) {
      $scope.compatible = WS.Devices.compatible.get(queryFeatures);
    }

  });
