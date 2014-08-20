'use strict';

angular.module('partyBidApp')
    .controller('SignUpControl', function ($scope,$location,$routeParams) {

        var activity_name = $routeParams.chosedactivityname;
        $scope.this_activity=Activity.find_activity_by_name(activity_name);

        var result = User.show();
        $scope.user_num = '(' + result.length + '人' + ')';
        $scope.users_data = result;

        $scope.during_activity_name = Activity.get_current_activity().name;
        $scope.signup_button_status = "unstart";

        $scope.back_to_activity_item_page = function () {
            $location.path('/item');

        };
        $scope.start_activity_btn = function () {
            if (Activity.get_current_activity().signup == "unstart") {
                Activity.change_activity_status('start');
            }
            if (result == "start" && confirm("确认你结束本次报名吗？")) {
                Activity.change_activity_status('end');
                result = getItemfromLocalstorage('during_activity').name;
                $location.path('/bidlist/' + result);
            }
            result = Activity.signup_page_button_status();
            $scope.signup_button_status = result;
        }
    });
