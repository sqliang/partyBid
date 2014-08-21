function Message (argument) {
	this.name=argument;
	// body...
}

Message.isRightmessage=function(json_message){
	var result_name_origin=json_message.messages[0].message.replace(/\s/g,'');
	var result_name=result_name_origin.toLowerCase();
	var name = result_name.slice(2);
    var telphone = json_message.messages[0].phone;
    var flag=0;
	//start with bm
	if(result_name.substring(0,2)=="bm"){
		flag=1;
	    var price = 0;
        var Signupuser = new SignUpInfo(name,telphone,price);
        Signupuser.save();

	}
	if(result_name.substring(0,2)=="jj"){
		flag=1;
		var messages = {phone:telphone,price:name};
        BidInfo.isbidstart(messages);

	}
    if (flag==0){
        Message.back_message('wrong',json_message.messages[0].phone);
    }

};
Message.isRepeat=function(phone){

	var current_activity = JSON.parse(localStorage['current_activity']);
	var current_activity_name = current_activity.name;
	var current_activity_users = JSON.parse(localStorage[current_activity_name]);
	for(var i=0;i<current_activity_users.length;i++){
		if (current_activity_users[i].phone==phone) {
			return true;
		}
	}
	return false;
};

Message.back_message=function (phone, type, status){
        var message_back = {
            "register_start": "恭喜！报名成功！^o^",
            "register_unstart": "活动尚未开始，请稍后~ >.<",
            "register_end": "Sorry，活动报名已结束.. =.=",
            "register_repeat": "您已经报过名了，请勿浪费短信费.. -_-||",
            "bid_run": "恭喜！您已出价成功！^o^",
            "bid_prepare": "竞价尚未开始，请稍后~ >.<",
            "bid_over": "Sorry，活动竞价已结束.. =.=",
            "bid_undefined": "对不起，您没有报名此次活动.. T.T",
            "bid_repeat": "您已成功出价，请勿重复出价.. -_-||"
        };
    var text = message_back[type + '_' + status];
    native_accessor.send_sms(phone,text);
};