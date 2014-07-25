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

	    AddUserToActivity.save(buildarr);

	}


}
//test same phonenum
ReceiveMessage.judgeRepeat=function(phone){

	// var activtiy_status = JSON.parse(localStorage['during_activity_or_not']);
	var current_activity = JSON.parse(localStorage['current_activity']);
	var user_current_activity= JSON.parse(localStorage[current_activity]);
	var user_current_activity_length=user_current_activity.length;
	for(i=0;i<user_current_activity_length;i++){
		if(user_current_activity[i].phone==phone){
			return true;
		}
		else {
			return false;
		}

	}

	


}