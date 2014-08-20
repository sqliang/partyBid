'use strict';

/**
 * @ngdoc function
 * @name partyBidApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the partyBidApp
 */
angular.module('partyBidApp')
    .controller('CreateControl', function ($scope,$location) {

        $scope.is_show_back_button = Activity.is_show_back_item_button();

        $scope.back_to_activity_SignUp_page = function () {
            
            if(!Activity.is_repeat()){
                $scope.new_activity_name = "活动名称重复！";
                return;
            }
            var activity = new Activity($scope.activity_name);
            activity.save();
            $location.path('/sign_up');

        };
        $scope.back_to_activity_item_page = function () {
            $location.path('/item');

        }

    });
