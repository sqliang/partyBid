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


	//get sign up user name
	var name = result_name.slice(2);
    var telphone = json_message.messages[0].phone;
    var price = 0;
    var buildarr={name:name,phone:telphone,price:price};

    AddUserToActivity.save(buildarr);
}