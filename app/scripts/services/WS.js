'use strict';

angular.module('BluetoothApp')
  .factory('WS', function ($resource) {
    var baseUrl = 'http://gmtotalconnect.com/Bluetooth/webresources/com.gm.bluetooth.v1.';

    return {
      Devices: {
        carriers: $resource(baseUrl + 'Devices/getCarriers?callback=JSON_CALLBACK', {}, {
          get: {
            isArray: true,
            cache: true,
            method: 'JSONP',
            transformResponse: function (data) {
              return data.data.carriers;
            }
          }
        }),
        manufacturers: $resource(baseUrl + 'Devices/getManufacturers?callback=JSON_CALLBACK', {}, {
          get: {
            isArray: true,
            cache: true,
            method: 'JSONP',
            transformResponse: function (data) {
              return data.data.manufacturers;
            }
          }
        }),
        devices: $resource(baseUrl + 'Devices/getDevices?callback=JSON_CALLBACK', {}, {
          get: {
            isArray: true,
            cache: true,
            method: 'JSONP',
            transformResponse: function (data) {
              return data.data.devices;
            }
          }
        }),
        compatible: $resource(baseUrl + 'Devices/getCompatibleVehicles?callback=JSON_CALLBACK', {}, {
          get: {
            isArray: true,
            cache: true,
            method: 'JSONP'
          }
        }),
        info: $resource(baseUrl + 'Devices/getDeviceVehicleInfo?callback=JSON_CALLBACK', {}, {
          get: {
            isArray: true,
            cache: true,
            method: 'JSONP'
          }
        }),
      },
      Vehicles: {
        years: $resource(baseUrl + 'Vehicles/getYears?callback=JSON_CALLBACK', {}, {
          get: {
            isArray: true,
            cache: true,
            method: 'JSONP',
            transformResponse: function (data) {
              var years = [];

              angular.forEach(data.data.years, function(value, index){
                years.push({value: value});
              });

              return years;
            }
          }
        }),
        makes: $resource(baseUrl + 'Vehicles/getMakes?callback=JSON_CALLBACK', {}, {
          get: {
            isArray: true,
            cache: true,
            method: 'JSONP',
            transformResponse: function (data) {
              return data.data.makes;
            }
          }
        }),
        models: $resource(baseUrl + 'Vehicles/getModels?callback=JSON_CALLBACK', {}, {
          get: {
            isArray: true,
            cache: true,
            method: 'JSONP',
            transformResponse: function (data) {
              return data.data.models;
            }
          }
        }),
        compatible: $resource(baseUrl + 'Vehicles/getCompatibleDevices?callback=JSON_CALLBACK', {}, {
          get: {
            isArray: true,
            cache: true,
            method: 'JSONP'
          }
        }),
        info: $resource(baseUrl + 'Vehicles/getDeviceVehicleInfo?callback=JSON_CALLBACK', {}, {
          get: {
            isArray: true,
            cache: true,
            method: 'JSONP'
          }
        })
      },
      Features: $resource(baseUrl + 'Features/getFeatures?callback=JSON_CALLBACK', {}, {
        get: {
          isArray: true,
          cache: true,
          method: 'JSONP',
          transformResponse: function (data) {
            return data.data.features;
          }
        }
      })
    };
  });
