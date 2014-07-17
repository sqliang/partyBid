'use strict';

/**
 * @ngdoc overview
 * @name jjjApp
 * @description
 * # jjjApp
 *
 * Main module of the application.
 */
angular
  .module('jjjApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider


//      .when('/', {
//        templateUrl: 'views/create_activity.html',
//        controller: 'create_activityCtrl'
//      })
      .when('/', {
        templateUrl: 'views/activity_item.html',
        controller: 'ItemCtrl'
      })

      .when('/create_activity', {
        templateUrl: 'views/create_activity.html',
        controller: 'create_activityCtrl'
      })
        .when('/item', {
            templateUrl:'views/activity_item.html',
            controller:'ItemCtrl'
        })
        .when('/bm', {
            templateUrl:'views/baoming.html',
            controller:'BmCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
