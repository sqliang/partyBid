function AddUserToActivity() {

}

AddUserToActivity.send_message = function (status,buildarr) {

    if(status=='start') {
        var test_phone = buildarr.phone;
        var test_repeat = ReceiveMessage.judgeRepeat(test_phone);
        if (test_repeat==true) {
            //hava a same phone in activity
            ReceiveMessage.back_message('repeat',buildarr.phone);

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
            ReceiveMessage.back_message('start',buildarr.phone);

         }
  

    }
    //活动未开始
    else if(status=="unstart"){
        ReceiveMessage.back_message('unstart',buildarr.phone);
    }
    //活动结束
    else {
        ReceiveMessage.back_message('end',buildarr.phone);
    }

}

AddUserToActivity.judgestatus = function (buildarr) {

    var result = JSON.parse(localStorage['current_activity']);
    var result=result.status;
    AddUserToActivity.send_message(result,buildarr);

}
