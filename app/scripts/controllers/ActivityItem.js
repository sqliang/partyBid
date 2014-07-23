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
        if(localStorage.length==0){
            var arr=[];
            localStorage['activitykey']=JSON.stringify(arr);
        }

        //将活动列表显示出来
        var arr1=JSON.parse(localStorage['activitykey']);
        if(arr1.length==0){
            $location.path('/create')
        }
        arr1 = arr1.reverse();
        $scope.activity_names=arr1;

        //返回按钮的实现功能
        $scope.back_to_create_activity=function(){
            $location.path('/create');
        }
        //点击开始或结束按钮的函数
        $scope.choose_activity =function(activity){

            //存储我们所点击的活动！跳转到该活动页面！
            localStorage['during_activity']=JSON.stringify(activity);

//            localStorage['before_activity']=JSON.stringify(JSON.parse(localStorage['during_activity']));
            //当我们所点击的是另外一个活动时，我们讲活动状态设置成未开始
            if (JSON.parse(localStorage[activity]) != JSON.parse(localStorage['before_activity'])){
                localStorage['during_activity_or_not']=JSON.stringify(0);
            }

            $location.path('/sign_up');
        }
    });
