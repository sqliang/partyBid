function BidStatus (argument) {
	
}

BidStatus.StartEndButton = function (){

}

BidStatus.ButtonEnable = function(){
	return false;
}

BidStatus.CreateNewBid =function (){

	var result1 = JSON.parse(localStorage['current_activity']);
	var result = result1.name+'_bid';
	BidStatus.Save(result);

}

BidStatus.Save =function (argument) {
	console.log(argument);

	
}