function BidInfo (argument) {
	
}

BidInfo.StartEndButton = function (){

}

BidInfo.ButtonEnable = function(){
	return false;
}

BidInfo.CreateNewBid =function (){
	var result=BidInfo.Get_Current_Activity_all_Bid();
	var newobject = {name:'竞价'+BidInfo.Get_Current_Bid_length(),status:'start',message:{phone:123,price:0}};
	result.push(newobject);
	BidInfo.SaveNewBid(result);


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