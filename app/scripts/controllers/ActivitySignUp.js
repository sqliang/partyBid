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


        var arr=JSON.parse(localStorage['activitykey']);
        var actlength=JSON.parse(localStorage['activitykey']).length;

        //设置表明界面的标题
        $scope.bm_activity_name="报名";
        $scope.start_done_btn="开始";

        $scope.back_to_activity_item=function(){


            $location.path('/item');
        }

        $scope.start_activity_btn=function (){
            var temp=$scope.start_done_btn;
            if(temp=="开始")
            {
                $scope.start_done_btn="结束";
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
                    localStorage['start_end_button_status']=JSON.stringify(1);
                }
                else{
                    $scope.start_done_btn = "结束";
                    localStorage['start_end_button_status']=JSON.stringify(0);

                }

            }
        }
    });
