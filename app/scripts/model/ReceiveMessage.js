function ReceiveMessage (argument) {
	this.name=argument;
	// body...
}

ReceiveMessage.judgemessage=function(json_message){
	//judge message format
	//http://www.w3school.com.cn/jsref/jsref_replace.asp  replace
	//remove space
	var result_name_origin=json_message.messages[0].message.replace(/\s/g,'');
	var result_name=result_name_origin.toLowerCase();

	var result_phone_origin = json_message.messages[0].phone;
	//start with bm
	if(result_name.substring(0,2)=="bm"){

		//get sign up user name
		var name = result_name.slice(2);
	    var telphone = json_message.messages[0].phone;
	    var price = 0;
	    var buildarr={name:name,phone:telphone,price:price};
	    AddUserToActivity.judgestatus(buildarr);

	}


}
//test same phonenum
ReceiveMessage.judgeRepeat=function(phone){

	var flag=0;
	var current_activity = JSON.parse(localStorage['current_activity']);
	var current_activity_name = current_activity.name;
	var current_activity_users = JSON.parse(localStorage[current_activity_name]);
	for(var i=0;i<current_activity_users.length;i++){
		if (current_activity_users[i].phone==phone) {
			flag=1;
			break;
		};
	}
	if(flag==0){
		return false;
	}
	else {
		return true;
	}
}

ReceiveMessage.back_message=function (result,phone){
        if(result=='unstart'){
            native_accessor.send_sms(phone,'活动尚未开始,请稍后');
        }
        else if (result=='start'){
            native_accessor.send_sms(phone,'恭喜！报名成功');
        }
        else if (result=='repeat'){
            native_accessor.send_sms(phone,'你已报名成功！请勿重复报名!');

        }
        else {
            native_accessor.send_sms(phone,'Sorry,活动报名已结束');
        }
}