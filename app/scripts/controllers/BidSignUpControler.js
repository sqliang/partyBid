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

  	   $scope.bid_users = BidInfo.show_current_bid_user(result);
       $scope.buttonisable=BidInfo.endbuttonisable(result);



  	$scope.back_to_bid_item_page=function(){
  		$location.path('/bidlist');

  	}
  	$scope.end_current_bid=function(){
      var result = confirm("是否确实要终止此次竞价？");
      if(result==true){
  		    BidInfo.end_current_bid();
          $scope.buttonisable=true;

      }
      else {
        ;
      }
  	}
    

  });
