'use strict';

/**
 * @ngdoc function
 * @name partyBidApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the partyBidApp
 */
angular.module('partyBidApp')
    .controller('ItemControl', function ($scope,$location) {

        if (!Activity.get_all_activity().length) {
            $location.path('/create');
        }

        $scope.activity_names = Activity.show();
        $scope.create_button_enable = Activity.create__enable_item_page();


        $scope.back_to_create_activity = function () {
            $location.path('/create');
        }
        $scope.choose_activity = function (activity) {

            localStorage['during_activity'] = JSON.stringify(activity);
            if (JSON.parse(localStorage['during_activity_or_not']) == "0") {
                var result = JSON.parse(localStorage['during_activity']);
                localStorage['current_activity'] = JSON.stringify(result);
            }
            $location.path('/sign_up');
        }
    });
