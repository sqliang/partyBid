function Message (argument) {
	this.name=argument;
	// body...
}

Message.isRightmessage=function(json_message){
	var result_name_origin=json_message.messages[0].message.replace(/\s/g,'');
	var result_name=result_name_origin.toLowerCase();
	var name = result_name.slice(2);
    var telphone = json_message.messages[0].phone;
	//start with bm
	if(result_name.substring(0,2)=="bm"){

	    var price = 0;
	    var buildarr={name:name,phone:telphone,price:price};
	    Activity.judgestatus(buildarr);
	}
	if(result_name.substring(0,2)=="jj"){
		var messages = {phone:telphone,price:name};
		BidInfo.add_user_to_current_bid(messages);

	}
    else {
        Message.back_message('wrong',json_message.messages[0].phone);
    }


}
Message.isRepeat=function(phone){

	var current_activity = JSON.parse(localStorage['current_activity']);
	var current_activity_name = current_activity.name;
	var current_activity_users = JSON.parse(localStorage[current_activity_name]);
	for(var i=0;i<current_activity_users.length;i++){
		if (current_activity_users[i].phone==phone) {
			return true;
		};
	}
	return false;
}

Message.back_message=function (result,phone){
        if(result=='unstart'){
            native_accessor.send_sms(phone,'活动尚未开始,请稍后');
        }
        else if (result=='start'){
            native_accessor.send_sms(phone,'恭喜！报名成功');
        }
        else if (result=='repeat'){
            native_accessor.send_sms(phone,'你已报名成功！请勿重复报名!');

        }
        else if (result=='wrong'){
            native_accessor.send_sms(phone,'您发送的信息有误！');
        }
        else if (result=='nosignup'){
            native_accessor.send_sms(phone,'对不起，您没有报名此次活动！');
        }
        else {
            native_accessor.send_sms(phone,'Sorry,活动报名已结束');
        }
}