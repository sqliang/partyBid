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

    try{
        JSON.parse(localStorage[this.name])
    }catch(err){
        var arr=[];
        localStorage[this.name]=JSON.stringify(arr);
    }
    var result = JSON.parse(localStorage[this.name])
    //获得报名者的姓名和电话号码,组装成特定的格式
    var name = json_message.messages[0].message.slice(2);
    var telphone = json_message.messages[0].phone;
    var price = 0;
    var buildarr={name:name,phone:telphone,price:price};

//    //外层再加上一个判断，判断活动状态
    var activity_status=JSON.parse(localStorage['during_activity_or_not']);
//
    if(activity_status=='1') {
        //将活动存入localstorage，如果存入成功，则返回true，否则存入
        if ((result.push(buildarr)) && (localStorage[this.name] = JSON.stringify(result))) {
            //存入成功，报名成功!
            native_accessor.send_sms(1);
        }
        //存入失败,报名失败
        else {
            native_accessor.send_sms(2);
        }
    }
    //活动未开始
    else if(activity_status=='0'){
        native_accessor.send_sms(0);
    }
    else {
        native_accessor.send_sms(2);
    }


}
