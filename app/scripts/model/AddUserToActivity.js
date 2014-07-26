function AddUserToActivity() {

}

AddUserToActivity.send_message = function (status,buildarr) {

    if(status=='start') {
        var test_phone = buildarr.phone;
        var test_repeat = ReceiveMessage.judgeRepeat(test_phone);
        if (test_repeat==true) {
            //hava a same phone in activity
            native_accessor.send_sms('repeat');

        }
        else {
            //no same phonenum
            //**************************************************
             var result1 = JSON.parse(localStorage['current_activity']);
             var result1=result1.name;
             var result2 = JSON.parse(localStorage[result1]);
             result2.push(buildarr);
             localStorage[result1] = JSON.stringify(result2);
            //*************************************************
            Page_Refresh();
            native_accessor.send_sms('start');

         }
  

    }
    //活动未开始
    else if(status=="unstart"){
        native_accessor.send_sms('unstart');
    }
    //活动结束
    else {
        native_accessor.send_sms('end');
    }

}

AddUserToActivity.judgestatus = function (buildarr) {

    var result = JSON.parse(localStorage['current_activity']);
    var result=result.status;
    AddUserToActivity.send_message(result,buildarr);

}
