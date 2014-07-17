'use strict';

/**
 * @ngdoc function
 * @name jjjApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jjjApp
 */
angular.module('jjjApp')
    .controller('BmCtrl', function ($scope,$location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        var arr=JSON.parse(localStorage['activitykey']);
        var actlength=JSON.parse(localStorage['activitykey']).length;
        console.log(arr[actlength-1]);
        //$scope.bm_activity_name=arr[actlength-1];
        $scope.bm_activity_name=localStorage.getItem('click_activity');
        $scope.back_to_activity_item=function(){

        $location.path('/main');
        }

    });
