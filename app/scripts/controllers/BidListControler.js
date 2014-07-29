'use strict';

/**
 * @ngdoc function
 * @name partyBidApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the partyBidApp
 */
angular.module('partyBidApp')
  .controller('BidListControl', function ($scope,$location) {

  		$scope.button_enable=BidInfo.ButtonEnable();

        $scope.start_bid=function(){
            BidInfo.CreateNewBid();
        }
        $scope.back_to_activity_item_page=function (){
            $location.path('/item');
        }

  });
