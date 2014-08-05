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
        $scope.user_num='('+result.length+'人'+')';         
        $scope.users_data=result;

        $scope.during_activity_name = Activity.get_during_activity().name;
        $scope.signup_button_status = Activity.signup_page_button_status();

        $scope.back_to_activity_item_page=function(){
           $location.path('/item');

        }
        $scope.start_activity_btn=function (){
            var result = Activity.signup_page_button_status();
            if(result=="unstart"){
                activitystatus.changeactivitystart();
            }
            if(result=="start"){
                result = confirm("确认你结束本次报名吗？");
                if(confirm("确认你结束本次报名吗？")){
                    activitystatus.changeactivityend();
                    result = getItemfromLocalstorage('during_activity').name;
                    $location.path('/bidlist/'+result);
                }

            }
            result = Activity.signup_page_button_status();
            $scope.signup_button_status = result;
            
        }
    });
