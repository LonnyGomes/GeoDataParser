/*global angular */
/**
 * @ngdoc function
 * @name geonamesFilterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the geonamesFilterApp
 */
angular.module('geonamesFilterApp')
  .controller('MainCtrl', function ($scope, geoNamesFactory) {
    'use strict';

    $scope.selected = undefined;

    geoNamesFactory.geoData.then(function (data) {
      $scope.geoData = data;
    });
  });
