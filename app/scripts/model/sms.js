//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"bm仝键","phone":"18733171780","name":"张柯33"}]})
//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"jj308","phone":"18733171780"}]})
var native_accessor = {
    send_sms: function (result,phone, message) {
        //回发函数
//        native_access.send_sms({"receivers":[{"name":'name', "phone":phone}]}, {"message_content":message});
        if(result=='0'){
            console.log('活动未开始!');
        }
        else if (result=='1'){
            console.log('恭喜！报名成功');
        }
        else {
            console.log('活动结束!');
        }
    },

    receive_message: function (json_message) {
        if (typeof this.process_received_message === 'function') {
            this.process_received_message(json_message);
        }
    },
//收到短信之后的处理函数
    process_received_message: function (json_message) {

        var result=JSON.parse(localStorage['during_activity']);
        //新建一个对象,用来将联系人存储到相应的活动
        var addtoactivity = new AddUserToActivity(result);
        addtoactivity.save(json_message);
    }
};



function notify_message_received(message_json) {
    //console.log(message_json);
    //console.log(JSON.stringify(message_json));
    //JSON.stringify(message_json);
    //alert(JSON.stringify(message_json.messages));
    native_accessor.receive_message(message_json);
    //var phone_number=message_json.messages[0].phone;
    //console.log(phone_number);
}