function BidInfo (argument) {
	
}

BidInfo.ButtonEnable = function(){
	return false;
}

BidInfo.CreateNewBid =function (){
	var result=BidInfo.Get_Current_Activity_all_Bid();
	var result_length=BidInfo.Get_Current_Bid_length()+1;
	var newobject = {name:'竞价'+result_length,status:'start',messages:[]};
	result.push(newobject);
	BidInfo.SaveNewBid(result);
	return newobject.name;


}

BidInfo.add_user_to_current_bid=function(argument){
	// console.log(argument.price);
	var name = BidInfo.Get_Current_Bid_name();
	var result=getItemfromLocalstorage(name);
	var current_bid = getItemfromLocalstorage('current_bid');
	for(var i=0;i<result.length;i++){
		if(result[i].name==current_bid){
			result[i].messages.push({phone:argument.phone,price:argument.price});
			localStorage[name]=JSON.stringify(result);
			return ;
		}

	}
	return ;

}

BidInfo.SaveNewBid =function (argument) {
	var result =BidInfo.Get_Current_Bid_name();
	localStorage[result]=JSON.stringify(argument);
}

BidInfo.Get_Current_Bid_name=function (){
	var result = Activity.get_current_activity().name;
	return result+'_bid';


}

BidInfo.Get_Current_Bid_length=function(){
	return BidInfo.Get_Current_Activity_all_Bid().length;

}
BidInfo.Get_Current_Activity_all_Bid = function(){
	var result = Activity.get_current_activity().name;
 	if(!localStorage[result+'_bid']){
		localStorage[result+'_bid']=JSON.stringify([]);
 	}
 	return JSON.parse(localStorage[result+'_bid']);
}

BidInfo.isRepeat=function(){

}
BidInfo.isSingUp=function(){

}

BidInfo.save_current_bid_to_localstorage=function(argument){
	localStorage['current_bid'] = JSON.stringify(argument);
	return ;
}

BidInfo.end_current_bid=function(){
	var result=Activity.get_current_activity();
	console.log(result);


}