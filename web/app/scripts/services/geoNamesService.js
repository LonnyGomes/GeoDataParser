/*global angular */
(function () {
  'use strict';

  angular.module('geoNames', [])
    .factory('geoNamesFactory', function ($http, $q) {
      var defer = $q.defer();

      $http.get('data/dump.json')
        .success(function (data, status, headers, config) {
          defer.resolve(data);
        })
        .error(function (data, status, headers, config) {
          defer.reject('Failed to retrieve data');
        });

      return {
        geoData: defer.promise
      };
    });
}());
