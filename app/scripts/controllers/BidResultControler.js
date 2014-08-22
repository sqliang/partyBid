'use strict';

angular.module('partyBidApp')
    .controller('BidResultControl', function ($scope,$location,$routeParams, $timeout) {
        var bid_name = $routeParams.clicked_bid;
        var user_in_order=BidResult.sort_by_price(bid_name);
        $scope.current_bid=bid_name;
        $scope.bid_user_num = user_in_order.length;
        $scope.all_bid_in_order = user_in_order;
        var bid_success_user = BidResult.bid_success_user(user_in_order);
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
        };

        $scope.back_to_bid_item_page = function () {
            $location.path('/bidlist/' + Activity.get_clicked_activity().name);
        };
        $scope.back_to_count_page = function () {
            if(bid_success_user==undefined){
                $location.path('/bidcount/' + 'fail'+"/"+bid_name);
            }
            else {
                $location.path('/bidcount/' + bid_success_user[0].price+"/"+bid_name);
            }
        }

    });
