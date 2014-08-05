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
        $scope.success_user = BidResult.get_success_bid_user(success_price);
        $scope.bidcounts = BidResult.get_bid_count_price_usernum();
        $scope.current_bid=BidInfo.get_current_bid();
        $scope.bid_user_num = BidResult.get_current_bid_user().length;
        $scope.back_to_bid_list_page = function () {
            var result = getItemfromLocalstorage('during_activity').name;
            $location.path('/bidlist/' + result);
        }

        $scope.back_to_bid_result_page = function () {
            var clicked_bid = BidInfo.get_current_bid();
            $location.path('/bidresult/' + clicked_bid);

        }

    });
