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
    $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
  // Any function returning a promise object can be used to load values asynchronously

    geoNamesFactory.geoData.then(function (data) {
      console.dir(data[0]);
      $scope.geoData = data;
    });
  });
