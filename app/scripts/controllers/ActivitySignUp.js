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
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        //测试，如果说受到短信，暂时用users_data代替
        $scope.users_data = [
            {
                "name":"赵大"
            },
            {
                "name":"钱二"
            },
            {
                "name":"张三"
            },
            {
                "name":"李四"
            },
            {
                "name":"王五"
            },
            {
                "name":"刘六"
            }
        ]

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
