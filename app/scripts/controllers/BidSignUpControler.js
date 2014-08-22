'use strict';

angular.module('partyBidApp')
  .controller('BidSignUpControl', function ($scope,$location,$routeParams) {
  	  	var current_bid_name = $routeParams.message;
        $scope.bid_end_button_enable = Bid.endbuttonisable(current_bid_name);
        var result = Bid.find_clicked_bid_messages(current_bid_name);
        $scope.bid_num='('+result.length+'人'+')';
        $scope.bid_users = result;

  	$scope.back_to_bid_item_page=function(){
        var clicked_activity_name = JSON.parse(localStorage['clicked_activity']).name;
  		$location.path('/bidlist/'+clicked_activity_name);

  	};
  	$scope.end_current_bid=function(){
      if(confirm("是否确实要终止此次竞价？")){
          Bid.end_current_bid(current_bid_name);
          $scope.bid_end_button_enable = Bid.endbuttonisable(current_bid_name);
          $location.path('/bidresult/'+current_bid_name);

      }
  	}

  });
