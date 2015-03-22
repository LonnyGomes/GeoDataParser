/*global angular */

/**
 * @ngdoc overview
 * @name geonamesFilterApp
 * @description
 * # geonamesFilterApp
 *
 * Main module of the application.
 */

(function () {
  "use strict";
  angular
    .module('geonamesFilterApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'geoNames',
      'ui.bootstrap'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
}());

