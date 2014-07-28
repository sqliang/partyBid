'use strict';

/**
 * @ngdoc overview
 * @name partyBidApp
 * @description
 * # partyBidApp
 *
 * Main module of the application.
 */
angular
  .module('partyBidApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'views/ActivityItem.html',
            controller: 'ItemControl'
        })

        .when('/create', {
            templateUrl: 'views/ActivityCreate.html',
            controller: 'CreateControl'
        })
        .when('/item', {
            templateUrl: 'views/ActivityItem.html',
            controller: 'ItemControl'
        })

        .when('/sign_up', {
            templateUrl: 'views/ActivitySignUp.html',
            controller: 'SignUpControl'
        })

        .when('/bidlist', {
            templateUrl:'views/BidList.html',
            controller:'BidListControl'

        })

        .when('/bidsignup', {
            templateUrl:'views/BIdSignUp.html',
            controller:'BidSignUpControl'

        })
      .otherwise({
        redirectTo: '/'
      });
  });
