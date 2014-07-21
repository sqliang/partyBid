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

        $scope.back_to_baoming=function(){
            var flag=0;
            var tempjson= JSON.parse(localStorage['activitykey']);

            for(var i=0;i<tempjson.length;i++){
                if($scope.activity_name==tempjson[i]){
                    flag=1;
                    $scope.new_activity_name="活动名称重复";
                }
            }

            if(flag==0){
                $scope.new_activity_name="";
                tempjson.push($scope.activity_name);
                localStorage['activitykey']=JSON.stringify(tempjson);

                //存储我们所点击的活动！跳转到该活动页面！
                //localStorage.setItem('click_activity',$scope.activity_name);
                $location.path('/sign_up');
            }
        }
        //


        $scope.back_to_activity_item=function(){
            $location.path('/item');

        }

    });
