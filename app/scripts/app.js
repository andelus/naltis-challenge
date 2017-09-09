'use strict';

/**
 * @ngdoc overview
 * @name naltisChallengeApp
 * @description
 * # naltisChallengeApp
 *
 * Main module of the application.
 */
angular
  .module('naltisChallengeApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(['$routeProvider',function ($routeProvider) {
    /**
    * Route Structure
    **/
    $routeProvider
      .when('/',{
        controller : 'MainCtrl',
        controllerAs : 'vm',
        templateUrl : 'views/main.html'
      })
      .otherwise({
        templateUrl : '404.html'
      });
  }]);
