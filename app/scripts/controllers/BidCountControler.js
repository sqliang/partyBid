'use strict';

/**
 * @ngdoc function
 * @name partyBidApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the partyBidApp
 */
angular.module('partyBidApp')
    .controller('BidCountControl', function ($scope,$location,$routeParams) {



        $scope.bidcounts=BidResult.get_bid_count_price_usernum();
//        var result = BidResult.get_bid_count_price_usernum();
        $scope.back_to_bid_list_page =function(){
            var result = getItemfromLocalstorage('during_activity').name;
            $location.path('/bidlist/'+result);
        }

        $scope.back_to_bid_result_page=function(){
            var clicked_bid = BidInfo.get_current_bid();
            $location.path('/bidresult/'+clicked_bid);

        }



    });
