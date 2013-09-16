'use strict';

angular.module('BluetoothApp')
  .controller('MenuCtrl', function ($scope, $route) {
    var init = function () {
      var routes = [];

      angular.forEach($route.routes, function(route, path){
        if ('pageName' in route) {
          if ('pageNode' in route) {
            routes[route.pageNode] = {name: route.pageName, path: path};
          }
        }
      });

      $scope.routes = routes;
    };

    $scope.$on('$routeChangeSuccess', function (e, newRoute) {
      $scope.active = newRoute.$$route.pageName;
    });

    init();
  });
