function Bid(phone,price){
    this.name=Bid.find_name_by_phone(phone);
    this.phone=phone;
    this.price= price;
}
Bid.prototype.save=function(){
    if(!Bid.is_bid_on(Activity.get_current_activity().name)){
        Message.back_message(this.phone,'bid',"prepare");
    }
};

Bid.CreateNewBid =function (activity_name){
    var all_bid=Bid.get_chosed_activity_bid(activity_name).reverse();
    var all_bid_length = all_bid.length+1;
    var newbid = {name:'竞价'+all_bid_length,status:'start',messages:[]};
    all_bid.push(newbid);
    Bid.save_new_bid(all_bid,activity_name);
    return newbid.name;
};

Bid.save_new_bid=function(updateallbid,activityname){
    var activity_bid_name = activityname+'_bid';
    localStorage[activity_bid_name]=JSON.stringify(updateallbid);
};


Bid.get_chosed_activity_bid=function(activity_name){
    var activity_bid_name = activity_name+'_bid';
    if(!localStorage[activity_bid_name]){
        localStorage[activity_bid_name]=JSON.stringify([]);
    }
    return JSON.parse(localStorage[activity_bid_name]).reverse();
};

Bid.end_current_bid=function(bid_name){
    var allbid=Bid.get_chosed_activity_bid(Activity.get_current_activity().name);
    _.find(allbid,function(bid){return bid.name==bid_name;}).status="end";
    Bid.update_current_activity_bid(allbid);
};
Bid.update_current_activity_bid=function(newallbid){
    var activity_bid_name = Activity.get_current_activity().name+'_bid';
    var this_activity=Activity.find_activity_by_name(Activity.get_current_activity().name);
    localStorage[activity_bid_name]=JSON.stringify(newallbid.reverse());
    this_activity.change_activity_status("end");

};
Bid.is_bid_on=function(activity_name){
    if(SignUpInfo.get_user_by_activity_name(activity_name).length==0){
        return "true";
    }
    return _.some(Bid.get_chosed_activity_bid(activity_name),function(bid){
        return bid.status=="start"});
};
Bid.is_bid_start=function(bid_name){
    return Bid.get_chosed_activity_bid();

};

Bid.endbuttonisable=function(bid_name){
    var click_name = Activity.get_clicked_activity().name;
    return _.find(Bid.get_chosed_activity_bid(click_name),function(bid){return bid.name==bid_name}).status;
};

Bid.find_onbid_bid=function(){
    var activity_name=Activity.get_onbid_activity().name;
    return _.find(Bid.get_chosed_activity_bid(activity_name),function(bid){return bid.status=="start"});
};
Bid.find_clicked_bid_messages=function(bid_name){
    var activity_name=Activity.get_clicked_activity().name;
    var result = Bid.get_chosed_activity_bid(activity_name);
    _.find(result,function(bid){return bid.name==bid_name});

};
Bid.find_name_by_phone=function(phone){
   var activity= Activity.get_current_activity().name;
    return _.find(SignUpInfo.get_user_by_activity_name(activity),function(user){return user.phone==phone}).name;
};

