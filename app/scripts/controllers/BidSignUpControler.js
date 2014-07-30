'use strict';

/**
 * @ngdoc function
 * @name partyBidApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the partyBidApp
 */
angular.module('partyBidApp')
  .controller('BidSignUpControl', function ($scope,$location,$routeParams) {
  	  	var result = $routeParams.message;


  	$scope.back_to_bid_item_page=function(){
  		$location.path('/bidlist');

  	}
  	$scope.end_current_bid=function(){
  		BidInfo.end_current_bid();
  	}
    

  });
