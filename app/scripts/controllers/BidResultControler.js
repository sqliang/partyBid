'use strict';

/**
 * @ngdoc function
 * @name partyBidApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the partyBidApp
 */
angular.module('partyBidApp')
    .controller('BidResultControl', function ($scope,$location,$routeParams, $timeout) {
        var result = $routeParams.clicked_bid;
        var result_messages = BidInfo.show_during_bid_user(result);
        result = BidResult.sort_by_price(result_messages);
        $scope.current_bid=BidInfo.get_current_bid();
        $scope.bid_user_num = BidResult.get_current_bid_user().length;
        $scope.all_bid_in_order = result;

        var bid_success_user = BidResult.bid_success_user(result);
        if(bid_success_user==undefined){
            $scope.is_bid_success="竞价失败";
        }
        else {
            $scope.modal_disp=true;
            $scope.success_user = bid_success_user[0];
            $scope.is_bid_success="竞价成功";
        }
        $('#example').modal("show");
        $timeout(function () {
            $('#example').modal('hide');
            $scope.show_success_user=BidResult.is_bid_success(bid_success_user);
            $scope.show_fail_user= BidResult.is_bid_fail(bid_success_user);

        }, 3000);


        $scope.show_footer_by_button = function () {
            $scope.show_success_user=BidResult.is_bid_success(bid_success_user);
            $scope.show_fail_user= BidResult.is_bid_fail(bid_success_user);
        }

        $scope.back_to_bid_item_page = function () {
            var result = getItemfromLocalstorage('during_activity').name;
            $location.path('/bidlist/' + result);
        }
        $scope.back_to_count_page = function () {
            if(bid_success_user==undefined){
                $location.path('/bidcount/' + 'fail');
            }
            else {
                $location.path('/bidcount/' + bid_success_user[0].price);
            }
        }

    });
