function User() {

}

User.send_message = function (status,buildarr) {

    if(status=='start') {
        var test_phone = buildarr.phone;
        var is_repeat = Message.isRepeat(test_phone);
        if (is_repeat==true) {
            Message.back_message('repeat',buildarr.phone);

        }
        else {
             var result1 = JSON.parse(localStorage['current_activity']);
             var result1=result1.name;
             var result2 = JSON.parse(localStorage[result1]);
             result2.push(buildarr);
             localStorage[result1] = JSON.stringify(result2);
            //*************************************************
            Page_Refresh();
            Message.back_message('start',buildarr.phone);

         }
  

    }
    //活动未开始
    else if(status=="unstart"){
        Message.back_message('unstart',buildarr.phone);
    }
    //活动结束
    else {
        Message.back_message('end',buildarr.phone);
    }

}
User.show =function (){
    var result = JSON.parse(localStorage['during_activity']).name;
    var users = JSON.parse(localStorage[result]);
    return users;   
}

