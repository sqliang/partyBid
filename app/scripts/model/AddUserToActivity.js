function AddUserToActivity(during_activity_name) {
    this.name = during_activity_name;
}

AddUserToActivity.send_message = function (result) {
    if(result==true) {
        console.log("恭喜！报名成功");
    }
    else {
        console.log("活动未开始！")
    }
}

AddUserToActivity.prototype.save = function (json_message) {

    //获得报名者的姓名和电话号码,组装成特定的格式
    var name = json_message.messages[0].message.slice(2);
    var telphone = json_message.messages[0].phone;
    var price = 0;
    var buildarr={name:name,phone:telphone,price:price};

    var result = JSON.parse(localStorage['during_activity']);
    result = result+'_status';
    result = JSON.parse(localStorage[result]);

    if(result=='start') {
        var result1 = JSON.parse(localStorage['during_activity']);
        var result2 = JSON.parse(localStorage[result1]);
        result2.push(buildarr);
        localStorage[result1] = JSON.stringify(result2);
        Page_Refresh();
        native_accessor.send_sms(1);

    }
    //活动未开始
    else if(result=="unstart"){
        native_accessor.send_sms(0);
    }
    //活动结束
    else {
        native_accessor.send_sms(2);
    }

}
