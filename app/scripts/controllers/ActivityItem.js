'use strict';

/**
 * @ngdoc function
 * @name partyBidApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the partyBidApp
 */
angular.module('partyBidApp')
    .controller('ItemControl', function ($scope,$location) {

        //将活动列表显示出来
//***********************************************************
        
        $scope.activity_names=ShowActivity();

//**************************************************
        //返回按钮的实现功能
        $scope.back_to_create_activity=function(){
            $location.path('/create');
        }
        //点击活动页面的活动
        $scope.choose_activity =function(activity){

            //存储我们所点击的活动！跳转到该活动页面！
            localStorage['during_activity']=JSON.stringify(activity);
            if(JSON.parse(localStorage['during_activity_or_not'])=="0"){
                var result = JSON.parse(localStorage['during_activity']);
                localStorage['current_activity']=JSON.stringify(result);
            }
            $location.path('/sign_up');
        }
    });
