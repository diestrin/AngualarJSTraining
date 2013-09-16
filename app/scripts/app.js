'use strict';

angular.module('BluetoothApp', ['ngResource'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        pageName: 'Home',
        pageNode: 1
      })
      .when('/device/:carrier/:manufacturer/:device/vehicle/:make/:year/:model/:radio/:navigation', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        pageName: 'Home'
      })
      .when('/device/:carrier/:manufacturer/:device', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        pageName: 'Home'
      })
      .when('/vehicle/:make/:year/:model/:radio/:navigation', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        pageName: 'Home'
      })
      .when('/devices', {
        templateUrl: 'views/devices.html',
        controller: 'DevicesCtrl',
        pageName: 'Devices',
        pageNode: 2
      })
      .otherwise({
        redirectTo: '/'
      });
  });
