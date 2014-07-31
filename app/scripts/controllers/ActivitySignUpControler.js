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

        var result=User.show();
        if(result.length==0){
            $scope.user_num='('+0+'人'+')';
            $scope.users_data=result;
        }
        else{
            $scope.user_num='('+result.length+'人'+')';
            $scope.users_data=result;
        }
        $scope.during_activity_name = Activity.get_during_activity().name;
        $scope.start_done_btn=activitystatus.changebuttonstatus();
        $scope.button_enable= activitystatus.isButtonAble($scope.start_done_btn);

        $scope.back_to_activity_item_page=function(){
           $location.path('/item');

        }
        $scope.start_activity_btn=function (){

            var result=$scope.start_done_btn;

            if (result=="开始") {
                $scope.start_done_btn="结束";
                activitystatus.changeactivitystart();
            };
            if (result=="结束") {
                var result1 = confirm("确认结束本次报名吗？");
                if(result1 == true){
                     // $scope.start_done_btn="开始";
                    // $scope.button_enable=activitystatus.isButtonAble(result);
                    activitystatus.changeactivityend();
                    var result = getItemfromLocalstorage('during_activity').name;
                    $location.path('/bidlist/'+result);
                }
            };
            
        }
    });
