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
  	  	var current_bid = $routeParams.message;
        $scope.bid_end_button_enable = BidInfo.endbuttonisable(current_bid);
        var result = BidInfo.show_during_bid_user(current_bid);
        $scope.bid_num='('+result.length+'人'+')';
        $scope.bid_users = result;  	   
        


  	$scope.back_to_bid_item_page=function(){
        var result = getItemfromLocalstorage('during_activity').name;
  		$location.path('/bidlist/'+result);

  	};
  	$scope.end_current_bid=function(){
      if(confirm("是否确实要终止此次竞价？")){
  		  BidInfo.end_current_bid();
          $scope.bid_end_button_enable = BidInfo.endbuttonisable(current_bid);
          $scope.buttonisable=true;
          var clicked_bid = BidInfo.get_current_bid();
          $location.path('/bidresult/'+clicked_bid);

      }
  	}

  });
