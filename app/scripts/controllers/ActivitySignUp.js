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
        //打开时设置位开始
        $scope.start_done_btn="开始";

        var current_activity=JSON.parse(localStorage['current_activity']);
        var during_activity = JSON.parse(localStorage['during_activity']);
        var button_status = JSON.parse(localStorage['during_activity_or_not']);

        if(button_status==1 && (current_activity==during_activity)){
            $scope.button_enable=false;
            $scope.start_done_btn="结束";
        }
        else {
            $scope.button_enable=true;
            $scope.start_done_btn="开始";
        }
        if (button_status==0 || button_status==2){
            $scope.button_enable=false;
            $scope.start_done_btn="开始";
        }

        //返回按钮函数实现
        $scope.back_to_activity_item=function(){
           $location.path('/item');
//            localStorage['before_activity']=JSON.stringify(JSON.parse(localStorage['during_activity']));

        }

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
                //存储按钮状态,0代表结束状态，1代表开始状态.
                localStorage['start_end_button_status']=JSON.stringify(0);

            }
            if(temp=="结束"){
                var cancel_yes_no=confirm("确认要结束本次报名吗?");
                if(cancel_yes_no==true) {
                    localStorage['during_activity_or_not']=JSON.stringify('2');
                    $scope.start_done_btn = "开始";
//            if (JSON.parse(localStorage[activity]) != JSON.parse(localStorage['before_activity'])){
                localStorage['during_activity_or_not']=JSON.stringify(0);
//            }
                    localStorage['start_end_button_status']=JSON.stringify(1);
                }
                else{
                    $scope.start_done_btn = "结束";
                    localStorage['start_end_button_status']=JSON.stringify(0);

                }

            }
        }
    });
