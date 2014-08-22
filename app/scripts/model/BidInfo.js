function BidInfo () {
}

BidInfo.ButtonEnable = function(){
	var result = BidInfo.Get_during_Activity_all_Bid();
    var during_bid_length =getItemfromLocalstorage(User.get_during_activity_users().name).length;
    var is_status_start = _.find(result,function(bid){return bid.status=="start"});
    return (during_bid_length==0 || JSON.parse(localStorage['during_activity']).status=="start" || is_status_start);

};

BidInfo.CreateNewBid =function (){
	var all_bid=BidInfo.Get_Current_Activity_all_Bid().reverse();
	var all_bid_length=BidInfo.Get_Current_Bid_length()+1;
	var newobject = {name:'竞价'+all_bid_length,status:'start',messages:[]};
    all_bid.push(newobject);
	BidInfo.SaveNewBid(all_bid);
	return newobject.name;
};

BidInfo.add_user_to_current_bid=function(user){
	if(BidInfo.isSingUp(user.phone)){
            BidInfo.create_bid_user_message(user);
	}
	else{
		Message.back_message('nosignup',user.phone);

	}
};

BidInfo.create_bid_user_message=function(user_message){
	var user_name = BidInfo.get_bid_user_name(user_message.phone);
    var user_price = parseInt(user_message.price);
    var message={name:user_name,phone:user_message.phone,price:user_price};
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
BidInfo.isSingUp=function(messsage_phone){
    var alluser = User.get_current_activity_users();
    return _.find(alluser,function(user){return user.phone==messsage_phone});
};

BidInfo.save_current_bid_to_localstorage=function(current_bid){
	localStorage['current_bid'] = JSON.stringify(current_bid);
};

BidInfo.end_current_bid=function(){
	var result=BidInfo.Get_Current_Bid_name();
	var allbid= getItemfromLocalstorage(result);
	var current_bid_name = getItemfromLocalstorage('current_bid');
    _.find(allbid,function(bid){return bid.name==current_bid_name}).status="end";
    localStorage[result]=JSON.stringify(allbid);
    Activity.change_activity_status("end");
};

BidInfo.show_current_bid_user =function(current_bid_name){
	var allbid = BidInfo.Get_Current_Activity_all_Bid();
    return _.find(allbid,function(bid){return bid.name==current_bid_name}).messages;
};

BidInfo.get_bid_user_name =function(bid_user_phone){
	var alluser=User.get_current_activity_users();
    return _.find(alluser,function(user){return user.phone==bid_user_phone}).name;

};

BidInfo.endbuttonisable=function(current_bid){
    var during_activity_name=getItemfromLocalstorage('during_activity').name+'_bid';
    var result = getItemfromLocalstorage(during_activity_name);
    return _.find(result,function(num){return num.name==current_bid}).status;
};
BidInfo.isbidstart=function(received_message){
	var current_bid_length= BidInfo.Get_Current_Bid_length();
	if(current_bid_length==0){
		Message.back_message('bidunstart',received_message.phone);
		return;
	}
    var result=BidInfo.get_current_bid_status();
	if(result=="bidunstart"){
		Message.back_message('bidunstart',received_message.phone);
	}
	else if(result=="end"){
		Message.back_message('bidend',received_message.phone);
	}
	else {
		if(BidInfo.is_bid_repeat(received_message)){
			Message.back_message('bidrepeat',received_message.phone);
		}
		else {
		    BidInfo.add_user_to_current_bid(received_message);
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

BidInfo.is_bid_repeat=function(received_message){
    var current_bid = getItemfromLocalstorage('current_bid');
    var allbid = getItemfromLocalstorage(BidInfo.Get_Current_Bid_name());
    var messages=_.find(allbid,function(bid){return bid.name==current_bid}).messages;
    return _.find(messages,function(message){return message.phone==received_message.phone});
};

BidInfo.get_activitiy_bid=function(activity_name){
    var activity_bid_name = activity_name+'_bid';
    if(!localStorage[activity_bid_name]){
    	localStorage[activity_bid_name]=JSON.stringify([]);
    }
    return getItemfromLocalstorage(activity_bid_name).reverse();

};

BidInfo.show_during_bid_user =function(during_activity_bid_name){
	var activity_bid_name = getItemfromLocalstorage('during_activity').name+'_bid';
	var allbid =getItemfromLocalstorage(activity_bid_name);
    return _.find(allbid, function(bid){ return bid.name==during_activity_bid_name }).messages;
};

BidInfo.get_current_bid=function(){
    return getItemfromLocalstorage('current_bid');
};