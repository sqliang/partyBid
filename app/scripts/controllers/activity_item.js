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

        var arr1=JSON.parse(localStorage['activitykey']);
        arr1 = arr1.reverse();
        $scope.activity_names=arr1;

        $scope.back_to_create_activity=function(){
            $location.path('/create_activity');
        }

        $scope.choose_activity =function(activity){
            localStorage.setItem('click_activity',activity);
            //$scope.bm_activity_name=localStorage.getItem('click_activity');
            $location.path('/bm');
        }
    });
