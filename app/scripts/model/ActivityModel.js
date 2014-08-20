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

Activity.save_current_activity=function(chooseactivity){
    localStorage['current_activity']=JSON.stringify(chooseactivity);
};

Activity.is_activity_on = function(){
    return _.some(Activity.get_all_activity(),function(activity){
        return activity.signup=="start" || activity.bid=="start"});
};

Activity.is_repeat=function(newactivityname){
    return _.findWhere(Activity.get_all_activity(), {name:newactivityname});
};

Activity.is_show_back_item_button =function (){
    return Activity.get_all_activity();

};

