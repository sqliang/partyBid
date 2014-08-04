function BidResult (){

}

BidResult.get_bid_user=function(){

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
    var result =_.find(count_price,function(price){
        return price.length==1
    })
    console.log(result);
}
//BidResult.wait_for_3_seconds=function (){
//
//}