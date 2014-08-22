'use strict';

/**
 * @ngdoc function
 * @name partyBidApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the partyBidApp
 */
angular.module('partyBidApp')
    .controller('BidCountControl', function ($scope, $location, $routeParams) {
        var success_price = $routeParams.bid_success_user_price;
        var bid_name = $routeParams.bid_name;
        if(success_price=="fail"){
            $scope.fail_bid=true;
        }
        else{
            $scope.success_bid=true;
            $scope.success_user = BidResult.bid_success_user(BidResult.sort_by_price(bid_name))[0];
        }
        $scope.bidcounts = BidResult.get_bid_count_price_usernum();
        $scope.current_bid=bid_name;
        $scope.bid_user_num = BidResult.sort_by_price(bid_name).length;
        $scope.back_to_bid_list_page = function () {
            $location.path('/bidlist/' + JSON.parse(localStorage['clicked_activity']).name);
        };

        $scope.back_to_bid_result_page = function () {
            $location.path('/bidresult/' + bid_name);

        }

    });
