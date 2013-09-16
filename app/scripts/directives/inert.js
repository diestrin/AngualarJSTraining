'use strict';

angular.module('BluetoothApp')
  .directive('inert', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        element.on('click', function (e) {
          e.preventDefault();
        });
      }
    };
  });
