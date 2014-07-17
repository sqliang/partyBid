'use strict';
angular.module('jjjApp')
    .controller('MainCtrl', function ($scope,$location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.back_to_create_activity=function(){
            $location.path('/bm');
        }
    });
