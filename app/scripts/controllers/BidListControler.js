'use strict';

angular.module('partyBidApp')
  .controller('BidListControl', function ($scope,$location,$routeParams) {

        var chosed_activity = $routeParams.message;
        $scope.this_activity = Activity.find_activity_by_name(chosed_activity);
        $scope.allbid=Bid.get_chosed_activity_bid(chosed_activity);
        $scope.button_enable = Bid.is_bid_on(chosed_activity) || Activity.is_activity_on();
        $scope.chosed_activity=chosed_activity;
        $scope.start_bid = function () {
            var newbidname=Bid.CreateNewBid(chosed_activity);
            $scope.this_activity.change_activity_status("onbid");
            $location.path('/bidsignup/' + newbidname);
        };
        $scope.choose_bid = function (click_bid) {
            $location.path('/bidsignup/' + click_bid.name);
        };
        $scope.back_to_activity_item_page = function () {
            $location.path('/item');
        }
  });
