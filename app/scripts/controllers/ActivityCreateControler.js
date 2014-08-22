'use strict';

angular.module('partyBidApp')
    .controller('CreateControl', function ($scope,$location) {

        $scope.is_show_back_button = Activity.is_show_back_item_button();

        $scope.back_to_activity_SignUp_page = function () {

            if(Activity.is_repeat($scope.activity_name)){
                $scope.new_activity_name = "活动名称重复！";
                return;
            }
            var activity = new Activity($scope.activity_name);
            Activity.save_current_activity(activity);
            Activity.save_clicked_activity(activity);
            activity.save();
            $location.path('/sign_up/'+activity.name);

        };
        $scope.back_to_activity_item_page = function () {
            $location.path('/item');
        }
    });
