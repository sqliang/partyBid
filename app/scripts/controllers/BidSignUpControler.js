'use strict';

/**
 * @ngdoc function
 * @name partyBidApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the partyBidApp
 */
angular.module('partyBidApp')
  .controller('BidSignUpControl', function ($scope,$location,$routeParams) {
  	  	var result = $routeParams.message;
        $scope.bid_end_button_enable = BidInfo.endbuttonisable(result);
        if(result.substring(0,2)=="竞价"){
            var result = BidInfo.show_current_bid_user(result);
        }
        else {
            var result = BidInfo.show_during_bid_user(result);

        }       

        if(result.length==0){
            $scope.bid_num='('+0+'人'+')';
        }
        else{
            $scope.bid_num='('+result.length+'人'+')';
        }
        $scope.bid_users = result;  	   
        


  	$scope.back_to_bid_item_page=function(){
        var result = getItemfromLocalstorage('during_activity').name;
  		$location.path('/bidlist/'+result);

  	}
  	$scope.end_current_bid=function(){
      var result = confirm("是否确实要终止此次竞价？");
      if(result==true){
  		    BidInfo.end_current_bid();
          $scope.bid_end_button_enable = BidInfo.endbuttonisable(result);
          $scope.buttonisable=true;

      }
      else {
        ;
      }
  	}
    

  });
