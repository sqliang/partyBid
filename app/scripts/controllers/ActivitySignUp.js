'use strict';

/**
 * @ngdoc function
 * @name partyBidApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the partyBidApp
 */
angular.module('partyBidApp')
    .controller('SignUpControl', function ($scope,$location) {

        var result=ShowUsersList();
        if(result.length==0){
            $scope.user_num='';
            $scope.users_data=result;
        }
        else{
            $scope.user_num='('+result.length+'人'+')';
            $scope.users_data=result;
        }
         $scope.start_done_btn=changeactivitystatus.changebuttonstatus();
        $scope.button_enable= changeactivitystatus.buttonable($scope.start_done_btn);


        //返回按钮函数实现
        $scope.back_to_activity_item=function(){
           $location.path('/item');

        }
        //开始结束按钮功能
        $scope.start_activity_btn=function (){

            var result=$scope.start_done_btn;

            if (result=="开始") {
                $scope.start_done_btn="结束";
                changeactivitystatus.changeactivitystart();
            };
            if (result=="结束") {
                $scope.start_done_btn="开始";
                changeactivitystatus.changeactivityend();
            };
            
        }
    });
