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

  		$scope.button_enable=BidStatus.ButtonEnable();

        $scope.start_bid_button=function(){
            BidStatus.CreateNewBid();
        }

  });
