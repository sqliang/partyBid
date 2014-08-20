function Activity (activity_name,signup,bid){
    this.name = activity_name;
    this.signup= signup || "unstart";
    this.bid=bid || "unstart";

}

Activity.prototype.save =function(){
    var allactivity=Activity.get_all_activity();
    allactivity.push(this);
    Activity.add_activity(allactivity);
};

Activity.add_activity=function(newallactivity){
    localStorage['activitykey'] = JSON.stringify(newallactivity);
};

Activity.get_all_activity=function(){
    if(!localStorage['activitykey']){
        localStorage['activitykey']=JSON.stringify([]);
    }
    return JSON.parse(localStorage['activitykey']);
};

Activity.is_repeat=function(newactivityname){
    return _.findWhere(Activity.get_all_activity(), {name:newactivityname});
};

Activity.is_show_back_item_button =function (){
    return Activity.get_all_activity();

};
