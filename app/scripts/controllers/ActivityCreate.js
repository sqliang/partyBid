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
            var flag=0;
            var result=$scope.activity_name;
            var result1 = JSON.parse(localStorage['activitykey']);
            for (var i=0;i<result1.length;i++){
                if (result1[i].name == result){
                    $scope.new_activity_name="活动名称重复！";
                    flag=1;
                    break;
                }
            }
            if (flag==0){
                CreateNewActivity.create(result);
                $location.path('/sign_up');
            }

        }

        $scope.back_to_activity_item=function(){
            $location.path('/item');

        }

    });
