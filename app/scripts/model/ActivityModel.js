function Activity (activity_name,signup,bid){
    this.name = activity_name;
    this.signup= signup || "unstart";
    this.bid=bid || "unstart";
}

Activity.prototype.save =function(){
    var allactivity=Activity.get_all_activity();
    allactivity.push(this);
    Activity.add_activity(this);
    Activity.add_activity_total(allactivity);
};

Activity.prototype.change_activity_status=function(){
    var newstatus = this.signup=="unstart"? "start":"unstart";
    var allactivity = Activity.get_all_activity();
    _.findWhere(allactivity, {name:this.name}).signup=newstatus;
    Activity.add_activity_total(allactivity);
    Activity.save_current_activity(_.findWhere(Activity.get_all_activity(), {name:this.name}));
};

Activity.add_activity=function(newactivity){
    localStorage[newactivity.name]=JSON.stringify([]);

};
Activity.add_activity_total=function(newallactivity){

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
Activity.get_current_activity=function(){
  return JSON.parse(localStorage['current_activity']);
};

Activity.is_activity_on = function(){
    return _.some(Activity.get_all_activity(),function(activity){
        return activity.signup=="start" || activity.bid=="start"});
};
Activity.find_activity_by_name = function(name){
    var found = _(Activity.get_all_activity()).findWhere({name: name}) || {};
    return new Activity(found.name, found.register, found.bid);
};

Activity.is_repeat=function(newactivityname){
    return _.findWhere(Activity.get_all_activity(), {name:newactivityname});
};

Activity.is_show_back_item_button =function (){
    return Activity.get_all_activity();
};

