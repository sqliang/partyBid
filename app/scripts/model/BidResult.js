function BidResult (){

}

BidResult.sort_by_price=function (argument){
    return _.sortBy(argument, function (list) {
        return list.price;
    })

}
BidResult.bid_success_user = function (argument){
    var count_price = _.groupBy(argument,function(obj){
        return obj.price;
    })
    BidResult.save_bid_count_price_user(count_price);
    var result =_.find(count_price,function(price){
        return price.length==1
    })
    return result;
}
BidResult.save_bid_count_price_user=function(argument){
    var result = _.map(argument, function(value,key ){
        return {"price": key, "count": value.length}
    })
    localStorage['bid_result'] = JSON.stringify(result);
}

BidResult.get_bid_count_price_usernum = function(){
    return JSON.parse(localStorage['bid_result']);
}