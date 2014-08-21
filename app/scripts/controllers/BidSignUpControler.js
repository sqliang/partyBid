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
  	  	var current_bid_name = $routeParams.message;
        $scope.bid_end_button_enable = Bid.endbuttonisable(current_bid_name);
//        $scope.this_activity=Activity.find_activity_by_name(chosed_activity);
//        var result = BidInfo.show_during_bid_user(current_bid);
//        $scope.bid_num='('+result.length+'人'+')';
//        $scope.bid_users = result;
        


  	$scope.back_to_bid_item_page=function(){
        var clicked_activity_name = JSON.parse(localStorage['clicked_activity']).name;
        console.log(clicked_activity_name);
  		$location.path('/bidlist/'+clicked_activity_name);

  	};
  	$scope.end_current_bid=function(){
      if(confirm("是否确实要终止此次竞价？")){
          Bid.end_current_bid(current_bid_name);
          $scope.bid_end_button_enable = Bid.endbuttonisable(current_bid_name);
//          var clicked_bid = BidInfo.get_current_bid();
//          $location.path('/bidresult/'+clicked_bid);

      }
  	}

  });
