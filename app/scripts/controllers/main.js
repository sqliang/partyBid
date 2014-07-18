'use strict';
angular.module('jjjApp')
    .controller('MainCtrl', function ($scope,$location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        if(localStorage.length==0){
            var arr=[];
            localStorage['activitykey']=JSON.stringify(arr);
        }

        if(JSON.parse(localStorage['activitykey']).length==0){
            $location.path('/create_activity');
        }
        else{
            $location.path('/item');
        }
    });
