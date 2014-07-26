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

        if (JSON.parse(localStorage['activitykey']).length==0){
            $scope.ifnotback=false;
        }
        else {
            $scope.ifnotback=true;
        }

        $scope.button_of_CreateActivity=function(){
            
            var result=$scope.activity_name;
            var flag=CreateNewActivity.activity_repeat(result);
            if(flag==0){
                $scope.new_activity_name="活动名称重复！";

            }
            if(flag==1){
                CreateNewActivity.create(result);
                $location.path('/sign_up');
            }

        }

        $scope.back_to_activity_item=function(){
            $location.path('/item');

        }

    });
