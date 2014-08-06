function BidResult (){

}

BidResult.sort_by_price=function (argument){
    return _.sortBy(argument, function (list) {
        return list.price;
    })

};
BidResult.bid_success_user = function (argument){
    var count_price = _.groupBy(argument,function(obj){
        return obj.price;
    });
    BidResult.save_bid_count_price_user(count_price);
    return _.find(count_price,function(price){
        return price.length==1
    });
};
BidResult.save_bid_count_price_user=function(argument){
    var result = _.map(argument, function(value,key ){
        return {"price": key, "count": value.length}
    });
    localStorage['bid_result'] = JSON.stringify(result);
};

BidResult.get_bid_count_price_usernum = function(){
    return JSON.parse(localStorage['bid_result']);
};

BidResult.get_current_bid_user = function () {
    var current_activity_bid_name = JSON.parse(localStorage['during_activity']).name + '_bid';
    var current_activity_all_bid = JSON.parse(localStorage[current_activity_bid_name]);
    var current_bid = JSON.parse(localStorage['current_bid']);
    return _.find(current_activity_all_bid, function(bid){return bid.name==current_bid}).messages;

};
BidResult.get_success_bid_user=function(argument){
    var messages = BidResult.get_current_bid_user();
    return _.find(messages,function(user){return user.price==argument});
};

BidResult.is_bid_success=function(argument){
    return !(argument==undefined)
};

BidResult.is_bid_fail=function(argument){
    return argument==undefined;

};