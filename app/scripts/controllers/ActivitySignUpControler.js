'use strict';

angular.module('partyBidApp')
    .controller('SignUpControl', function ($scope,$location,$routeParams) {

        var activity_name = $routeParams.chosedactivityname;
        $scope.this_activity=Activity.find_activity_by_name(activity_name);

        var result = User.show();
        $scope.user_num = '(' + result.length + '人' + ')';
        $scope.users_data = result;

        $scope.during_activity_name = activity_name;
        $scope.signup_button_status = Activity.signup_page_button_switch(activity_name);
        $scope.back_to_activity_item_page = function () {
            $location.path('/item');

        };
        $scope.start_activity_btn = function () {

            var current_activity = Activity.get_current_activity();
            if(current_activity.signup !="start"){
                $scope.this_activity.change_activity_status("start");
            }
            if (current_activity.signup == "start" && confirm("确认你结束本次报名吗？")) {
                $scope.this_activity.change_activity_status("end");
                $location.path('/bidlist/' + current_activity.name);
            }
            $scope.signup_button_status = Activity.get_current_activity().signup;


        }
    });
