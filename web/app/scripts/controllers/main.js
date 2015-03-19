/*global angular, L */
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

    //TODO: make map compentent it's own directive
    var map = L.map('map', {
      center: [20.0, 5.0],
      minZoom: 2,
      zoom: 2
    });

    L.tileLayer('http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
      subdomains: ['otile1', 'otile2', 'otile3', 'otile4']
    }).addTo(map);

    $scope.$watch("selected", function (newVal, oldVal) {
      //if a new country value was selected,
      //plot marker and zoom to the location
      if (newVal && typeof newVal === "object") {
        var coords = [newVal.lat, newVal.lon];
        L.marker(coords)
          .bindPopup(newVal.name)
          .addTo(map);

        map.setView(coords, 6, { animate: true });
      }
    });
  });
