function BidInfo (argument) {
	
}

BidInfo.ButtonEnable = function(argument){
	var result = BidInfo.Get_during_Activity_all_Bid();
    var during_bid_length =getItemfromLocalstorage(User.get_during_activity_users().name).length;
    if(during_bid_length==0 || JSON.parse(localStorage['during_activity']).status=="start"){
    	return true;
    }
	for(var i=0;i<result.length;i++){
		if(result[i].status=="start" ){
			return true;
		}
	}
	return false;
};

BidInfo.CreateNewBid =function (){
	var result=BidInfo.Get_Current_Activity_all_Bid().reverse();
	var result_length=BidInfo.Get_Current_Bid_length()+1;
	var newobject = {name:'竞价'+result_length,status:'start',messages:[]};
	result.push(newobject);
	BidInfo.SaveNewBid(result);
	return newobject.name;


};

BidInfo.add_user_to_current_bid=function(argument){
	if(BidInfo.isSingUp(argument.phone)){
            BidInfo.create_bid_user_message(argument);
	}
	else{
		Message.back_message('nosignup',argument.phone);

	}
};

BidInfo.create_bid_user_message=function(argument){
	var user_name = BidInfo.get_bid_user_name(argument.phone);
    var argument_price = parseInt(argument.price);
    var message={name:user_name,phone:argument.phone,price:argument_price};
    BidInfo.save_bid_user_message(message);
};

BidInfo.save_bid_user_message=function(message){
    var name = BidInfo.Get_Current_Bid_name();
    var current_all_bid=getItemfromLocalstorage(name);
    var current_bid = getItemfromLocalstorage('current_bid');
    _.find(current_all_bid,function(bid){return bid.name==current_bid}).messages.push(message);
    localStorage[name]=JSON.stringify(current_all_bid);
	Message.back_message('bidsuccess',message.phone);
	refresh_bid_signup_page();
};

BidInfo.SaveNewBid =function (argument) {
	var result =BidInfo.Get_Current_Bid_name();
	localStorage[result]=JSON.stringify(argument);
};

BidInfo.Get_Current_Bid_name=function (){
	var result = Activity.get_current_activity().name;
	return result+'_bid';
};

BidInfo.Get_Current_Bid_length=function(){
	return BidInfo.Get_Current_Activity_all_Bid().length;

};

BidInfo.Get_during_Bid_length=function(){
	return BidInfo.Get_during_Activity_all_Bid().length;

};

BidInfo.Get_Current_Activity_all_Bid = function(){
	var result = Activity.get_current_activity().name;
 	if(!localStorage[result+'_bid']){
		localStorage[result+'_bid']=JSON.stringify([]);
 	}
 	return JSON.parse(localStorage[result+'_bid']).reverse();
};
BidInfo.Get_during_Activity_all_Bid = function(){
    var result = JSON.parse(localStorage['during_activity']).name;
    if(!localStorage[result+'_bid']){
        localStorage[result+'_bid']=JSON.stringify([]);
    }
    return JSON.parse(localStorage[result+'_bid']).reverse();
};
BidInfo.isSingUp=function(argument){
    var alluser = User.get_current_activity_users();
    return _.find(alluser,function(user){return user.phone==argument});
};

BidInfo.save_current_bid_to_localstorage=function(argument){
	localStorage['current_bid'] = JSON.stringify(argument);
	return ;
};

BidInfo.end_current_bid=function(){
	var result=BidInfo.Get_Current_Bid_name();
	var allbid= getItemfromLocalstorage(result);
	var current_bid_name = getItemfromLocalstorage('current_bid');
    _.find(allbid,function(bid){return bid.name==current_bid_name}).status="end";
    localStorage[result]=JSON.stringify(allbid);
    Activity.change_activity_status("end");
};

BidInfo.show_current_bid_user =function(argument){
	var allbid = BidInfo.Get_Current_Activity_all_Bid();
    return _.find(allbid,function(bid){return bid.name==argument}).messages;
};

BidInfo.get_bid_user_name =function(argument){
	var alluser=User.get_current_activity_users();
    return _.find(alluser,function(user){return user.phone==argument}).name;

};

BidInfo.endbuttonisable=function(current_bid){
    var during_activity_name=getItemfromLocalstorage('during_activity').name+'_bid';
    var result = getItemfromLocalstorage(during_activity_name);
    return _.find(result,function(num){return num.name==current_bid}).status;
};
BidInfo.isbidstart=function(argument){
	var current_bid_length= BidInfo.Get_Current_Bid_length();
	if(current_bid_length==0){
		Message.back_message('bidunstart',argument.phone);
		return;
	}
    var result=BidInfo.get_current_bid_status();
	if(result=="bidunstart"){
		Message.back_message('bidunstart',argument.phone);		
	}
	else if(result=="end"){
		Message.back_message('bidend',argument.phone);
	}
	else {
		if(BidInfo.is_bid_repeat(argument)){
			Message.back_message('bidrepeat',argument.phone);
		}
		else {
		    BidInfo.add_user_to_current_bid(argument);
		}	
		
	}
	
};

BidInfo.get_current_bid_status=function(){
	var current_bid = getItemfromLocalstorage('current_bid');
	var allbid = getItemfromLocalstorage(BidInfo.Get_Current_Bid_name());
	for(var i=0;i<allbid.length;i++){
		if (allbid[i].name==current_bid) {
			return allbid[i].status;
		}
	}
	return 'bidunstart';
};

BidInfo.is_bid_repeat=function(argument){
    var current_bid = getItemfromLocalstorage('current_bid');
    var allbid = getItemfromLocalstorage(BidInfo.Get_Current_Bid_name());
    var messages=_.find(allbid,function(bid){return bid.name==current_bid}).messages;
    return _.find(messages,function(message){return message.phone==argument.phone});
};

BidInfo.get_activitiy_bid=function(argument){
    var result = argument+'_bid';
    if(!localStorage[result]){
    	localStorage[result]=JSON.stringify([]);
    }
    return getItemfromLocalstorage(result).reverse();

};

BidInfo.show_during_bid_user =function(argument){
	var result = getItemfromLocalstorage('during_activity').name+'_bid';
	var allbid =getItemfromLocalstorage(result);
    return _.find(allbid, function(bid){ return bid.name==argument }).messages;
};

BidInfo.get_current_bid=function(){
    return getItemfromLocalstorage('current_bid');
};