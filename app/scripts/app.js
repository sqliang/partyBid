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

        .when('/sign_up/:chosedactivityname', {
            templateUrl: 'views/ActivitySignUp.html',
            controller: 'SignUpControl'
        })

        .when('/bidlist/:message', {
            templateUrl:'views/BidList.html',
            controller:'BidListControl'

        })

        .when('/bidsignup/:message', {
            templateUrl:'views/BIdSignUp.html',
            controller:'BidSignUpControl'
         })
        .when('/bidresult/:clicked_bid', {
            templateUrl:'views/BidResult.html',
            controller:'BidResultControl'
        })
        .when('/bidcount/:bid_success_user_price/:bid_name', {
            templateUrl:'views/BidCount.html',
            controller:'BidCountControl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
