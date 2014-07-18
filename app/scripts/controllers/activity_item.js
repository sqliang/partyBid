'use strict';

/**
 * @ngdoc function
 * @name jjjApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jjjApp
 */
angular.module('jjjApp')
    .controller('ItemCtrl', function ($scope,$location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        if(localStorage.length==0){
            var arr=[];
            localStorage['activitykey']=JSON.stringify(arr);
        }

        //将活动列表显示出来
        var arr1=JSON.parse(localStorage['activitykey']);
        if(arr1.length==0){
            $location.path('/create_activity')
        }
        arr1 = arr1.reverse();
        $scope.activity_names=arr1;

        //返回按钮的实现功能
        $scope.back_to_create_activity=function(){
            $location.path('/create_activity');
        }
        //点击开始或结束按钮的函数
        $scope.choose_activity =function(activity){

            //存储我们所点击的活动！跳转到该活动页面！
            //localStorage.setItem('click_activity',activity);
            //$scope.bm_activity_name=localStorage.getItem('click_activity');
            $location.path('/bm');
        }
    });