'use strict';

/**
 * @ngdoc function
 * @name partyBidApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the partyBidApp
 */
angular.module('partyBidApp')
  .controller('BidListControl', function ($scope,$location,$routeParams) {

        var result = $routeParams.message;
  		$scope.button_enable=BidInfo.ButtonEnable();
        $scope.allbid=BidInfo.get_activitiy_bid(result);
        $scope.start_bid=function(){
        	var result= BidInfo.CreateNewBid();
        	BidInfo.save_current_bid_to_localstorage(result);
          activitystatus.changeactivityonbid();
        	$location.path('/bidsignup/'+result);
        }
        $scope.choose_bid=function(click_bid){
           $location.path('/bidsignup/'+click_bid.name);
        }
        $scope.back_to_activity_item_page=function (){
            $location.path('/item');
        }
  });
