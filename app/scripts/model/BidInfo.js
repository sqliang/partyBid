function BidInfo (argument) {
	
}

BidInfo.StartEndButton = function (){

}

BidInfo.ButtonEnable = function(){
	return false;
}

BidInfo.CreateNewBid =function (){

	var result1 = JSON.parse(localStorage['current_activity']);
	var result = result1.name+'_bid';
    BidInfo.Save(result);

}

BidInfo.Save =function (argument) {
	console.log(argument);

	
}