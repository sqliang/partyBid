function Activity (activity_name,signup,bid){
    this.name = activity_name;
    this.signup= signup || "unstart";
    this.bid=bid || "unstart";
}

Activity.prototype.save =function(){
    var allactivity=Activity.get_all_activity();
    allactivity.push(this);
    this.add_activity(this);
    this.add_activity_total(allactivity);
};

Activity.prototype.change_activity_status=function(newstatus){
    var allactivity = Activity.get_all_activity();
    _.findWhere(allactivity, {name:this.name}).signup=newstatus;
    this.add_activity_total(allactivity);
    Activity.save_current_activity(_.findWhere(Activity.get_all_activity(), {name:this.name}));
};

Activity.prototype.add_activity=function(newactivity){
    localStorage[newactivity.name]=JSON.stringify([]);
};
Activity.prototype.add_activity_total=function(newallactivity){
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
Activity.save_clicked_activity=function(chooseactivity){
    localStorage['clicked_activity']=JSON.stringify(chooseactivity);
};
Activity.get_clicked_activity=function(){
    return JSON.parse(localStorage['clicked_activity']);
};

Activity.signup_page_button_switch=function(chosedactivityname){
    var chosedobjectsignup =  _.findWhere(Activity.get_all_activity(), {name:chosedactivityname}).signup;
    if((chosedobjectsignup=="unstart" || chosedobjectsignup=="end") && !Activity.is_activity_on()){
        return "unstart";
    }
    if(chosedobjectsignup=="start" && Activity.is_activity_on()){
        return "start";
    }
    if(chosedobjectsignup=="onbid"){
        return "onbid";
    }
};

Activity.is_activity_on = function(){
    return _.some(Activity.get_all_activity(),function(activity){
        return activity.signup=="start" || activity.signup=="onbid"});
};
Activity.find_activity_by_name = function(name){
    var found = _(Activity.get_all_activity()).findWhere({name: name}) || {};
    return new Activity(found.name, found.signup, found.bid);
};

Activity.is_repeat=function(newactivityname){
    return _.findWhere(Activity.get_all_activity(), {name:newactivityname});
};

Activity.is_show_back_item_button =function (){
    return Activity.get_all_activity();
};

