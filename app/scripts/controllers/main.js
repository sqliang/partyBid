'use strict';

/**
 * @ngdoc function
 * @name partyBidApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the partyBidApp
 */
angular.module('partyBidApp')
  .controller('MainCtrl', function ($scope,$location) {

    if(localStorage.length==0){
        var arr=[];
        localStorage['activitykey']=JSON.stringify(arr);
      }
    if(JSON.parse(localStorage['activitykey']).length==0){
        $location.path('/create');
    }
    else{
        $location.path('/item');
    }

  });
