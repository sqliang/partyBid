'use strict';

angular.module('partyBidApp')
    .controller('ItemControl', function ($scope,$location) {

        if (!Activity.get_all_activity().length) {
            $location.path('/create');
        }

        $scope.activity_names = Activity.get_all_activity();
        $scope.create_button_enable = Activity.is_activity_on();


        $scope.back_to_create_activity = function () {
            $location.path('/create');
        };
        $scope.choose_activity = function (chooseactivity) {
            Activity.save_current_activity(chooseactivity)
            $location.path('/sign_up/'+chooseactivity.name);
        }
    });
