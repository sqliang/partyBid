'use strict';

/**
 * @ngdoc function
 * @name jjjApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jjjApp
 */
angular.module('jjjApp')
    .controller('create_activityCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        if(localStorage.length==0){
            var arr=[];
            localStorage['activitykey']=JSON.stringify(arr);
        }
        if (JSON.parse(localStorage['activitykey']).length==0){
            $scope.ifnotback=false;
        }
        else {
            $scope.ifnotback=true;
        }

        $scope.back_to_baoming=function(){
            var tempjson= JSON.parse(localStorage['activitykey']);
            tempjson.push($scope.activity_name);
            localStorage['activitykey']=JSON.stringify(tempjson);
            localStorage.setItem('click_activity',$scope.activity_name);

            $location.path('/bm');

        }


        $scope.back_to_activity_item=function(){
            $location.path('/item');

        }

    });
