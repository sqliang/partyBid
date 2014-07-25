//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"bm仝键","phone":"18733171780","name":"张柯33"}]})
//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"jj308","phone":"18733171780"}]})
var native_accessor = {
    send_sms: function (result,phone, message) {
        //回发给报名者的函数
//        native_access.send_sms({"receivers":[{"name":'name', "phone":phone}]}, {"message_content":message});
        if(result=='unstart'){
            console.log('活动尚未开始,请稍后');
        }
        else if (result=='start'){
            console.log('恭喜！报名成功');
        }
        else if (result=='repeat'){
            console.log('你已报名成功！请勿重复报名!');

        }
        else {
            console.log('Sorry,活动报名已结束');
        }
    },

    receive_message: function (json_message) {
        if (typeof this.process_received_message === 'function') {
            this.process_received_message(json_message);
        }
    },
//收到短信之后的处理函数
    process_received_message: function (json_message) {
        ReceiveMessage.judgemessage(json_message);
    }
};



function notify_message_received(message_json) {
    native_accessor.receive_message(message_json);
}