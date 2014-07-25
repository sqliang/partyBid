function AddUserToActivity(during_activity_name) {
    this.name = during_activity_name;
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
            var result1 = JSON.parse(localStorage['during_activity']);
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

AddUserToActivity.save = function (buildarr) {

    var result = JSON.parse(localStorage['during_activity']);
    result = result+'_status';
    result = JSON.parse(localStorage[result]);

    this.send_message(result,buildarr);

}
