//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"bm仝键","phone":"18733171780","name":"张柯33"}]})
//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"jj308","phone":"18733171780"}]})
var native_accessor = {
    send_sms: function (phone, message) {

        // native_access.send_sms({"receivers":[{"name":'name', "phone":phone}]}, {"message_content":message});
      console.log(phone,message);
    },

    receive_message: function (json_message) {
        if (typeof this.process_received_message === 'function') {
            this.process_received_message(json_message);
        }
    },
//收到短信之后的处理函数
    process_received_message: function (json_message) {
//        Message.isRightmessage(json_message);
        var message = new Message(json_message);
        message.isRightmessage();
    }
};



function notify_message_received(message_json) {
    native_accessor.receive_message(message_json);
}