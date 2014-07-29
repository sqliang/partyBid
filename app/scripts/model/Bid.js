function Bid (argument) {
	
}

Bid.StartEndButton = function (){

}

Bid.ButtonEnable = function(){
	return false;
}

Bid.CreateNewBid =function (){

	var result1 = JSON.parse(localStorage['current_activity']);
	var result = result1.name+'_bid';
	Bid.Save(result);

}

Bid.Save =function (argument) {
	console.log(argument);

	
}