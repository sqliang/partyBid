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




        var result=JSON.parse(localStorage['users']);
        $scope.users_data=result.messages;

        //console.log(result.messages);
//        var result_name=result.messages[1].message.slice(2);
//        $scope.users_data=result.messages[1];
//        $scope.username=result_name;

        var arr=JSON.parse(localStorage['activitykey']);
        var actlength=JSON.parse(localStorage['activitykey']).length;

        //console.log(arr[actlength-1]);
        //$scope.bm_activity_name=arr[actlength-1];
        //$scope.bm_activity_name=localStorage.getItem('click_activity');
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
            }
            if(temp=="结束"){
                var cancel_yes_no=confirm("确认要结束本次报名吗?");
                if(cancel_yes_no==true) {
                    $scope.start_done_btn = "开始";
                }
                else{
                    $scope.start_done_btn = "结束";

                }

            }
        }
    });
