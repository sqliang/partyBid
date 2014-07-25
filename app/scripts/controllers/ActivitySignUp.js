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

        var during_name= JSON.parse(localStorage['during_activity']);
        var result=JSON.parse(localStorage[during_name]);
        $scope.users_data=result;
        //设置表明界面的标题,统计人数
        $scope.user_num=result.length;

        var result = JSON.parse(localStorage['during_activity']);
        result = result+'_status';
        result = JSON.parse(localStorage[result]);
        var result1 = JSON.parse(localStorage['during_activity_or_not']);
        
        if(result=="start" && result1==1){
            $scope.button_enable=false;
            $scope.start_done_btn="结束";
        }
        if (result=="end" || result=="unstart") {
            $scope.button_enable=true;
            $scope.start_done_btn="开始";
        }
        if(result1!=1){
            $scope.button_enable=false;
            $scope.start_done_btn="开始";
        }

        //返回按钮函数实现
        $scope.back_to_activity_item=function(){
           $location.path('/item');

        }
        //开始结束按钮功能
        $scope.start_activity_btn=function (){
            var temp=$scope.start_done_btn;
            if(temp=="开始")
            {
                $scope.start_done_btn="结束";
                //将正在进行的活动存入current_activity
                var result = JSON.parse(localStorage['during_activity']);
                localStorage['current_activity']=JSON.stringify(result);
                //有活动正在进行
                localStorage['during_activity_or_not']=JSON.stringify('1');
                result = result+'_status';
                localStorage[result]=JSON.stringify('start');


            }
            if(temp=="结束"){
                var cancel_yes_no=confirm("确认要结束本次报名吗?");
                if(cancel_yes_no==true) {
                    localStorage['during_activity_or_not']=JSON.stringify('2');
                    $scope.start_done_btn = "开始";

                    var result = JSON.parse(localStorage['during_activity']);
                    result = result+'_status';
                    localStorage[result]=JSON.stringify('end');

                }
                else{
                    $scope.start_done_btn = "结束";

                }

            }
        }
    });
