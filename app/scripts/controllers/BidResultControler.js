'use strict';

/**
 * @ngdoc function
 * @name partyBidApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the partyBidApp
 */
angular.module('partyBidApp')
    .controller('BidResultControl', function ($scope,$location,$routeParams) {
        var result =$routeParams.clicked_bid;

        var result_messages=BidInfo.show_during_bid_user(result);
        var result = BidResult.sort_by_price(result_messages);
        $scope.all_bid_in_order = result;
        var result = BidResult.bid_success_user(result);
        $scope.success_user=result[0];
        $scope.back_to_bid_item_page=function(){
            var result = getItemfromLocalstorage('during_activity').name;
            $location.path('/bidlist/'+result);
        }
        $scope.back_to_count_page=function(){
            $location.path('/bidcount/'+result[0].price);
        }

    });
