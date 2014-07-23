'use strict';

/**
 * @ngdoc function
 * @name partyBidApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the partyBidApp
 */
angular.module('partyBidApp')
  .controller('MainCtrl', function ($scope,$location) {
      
    if(localStorage.length==0){
        var arr=[];
        localStorage['activitykey']=JSON.stringify(arr);
        localStorage['during_activity']=JSON.stringify(arr);
        localStorage['current_activity']=JSON.stringify(arr);
//        localStorage['users']=JSON.stringify(arr);
        //初始化设置没有活动在进行
        localStorage['during_activity_or_not']=JSON.stringify(0);
        //设置报名页面的开始按钮状态
        localStorage['start_end_button_status']=JSON.stringify(1);
        //记录上一次我们的活动
        localStorage['before_activity']=JSON.stringify(0);

      }
    if(JSON.parse(localStorage['activitykey']).length==0){
        $location.path('/create');
    }
    else{
        $location.path('/item');
    }

  });
