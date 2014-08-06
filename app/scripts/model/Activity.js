function Activity (argument) {
	
}

Activity.create=function(new_activity_name){

    var NewActivcityName = new_activity_name;
    var new_activity_object={};
    new_activity_object.name=NewActivcityName;
    new_activity_object.status="unstart"
    
    Activity.save(new_activity_object);
    Activity.create_new_activity_key(new_activity_name);
    Activity.edit_during_activity(new_activity_object);

}

Activity.save=function (result_object) {

	var result = Activity.get_all_activity();
	result.push(result_object);
    localStorage['activitykey']=JSON.stringify(result);
	
}
Activity.create_new_activity_key=function (argument) {
    var arr=[];
    localStorage[argument]=JSON.stringify(arr);
}

Activity.edit_during_activity=function (argument) {
    localStorage['during_activity']=JSON.stringify(argument);
    localStorage['current_activity']=JSON.stringify(argument);
}

Activity.activity_repeat =function(argument){
    var result = JSON.parse(localStorage['activitykey']);
    return _.find(result,function(obj){return obj.name==argument});
}

Activity.show=function(){
    return Activity.get_all_activity().reverse();;
}


Activity.change_activity_status=function(status){

    var allactivity= JSON.parse(localStorage['activitykey']);
    var during_activity= JSON.parse(localStorage['during_activity']);
    var during_activity_name = during_activity.name;
    _.find(allactivity,function(activity){return activity.name==during_activity_name;}).status=status;
    Activity.savetolocalstorage(during_activity,allactivity,status);
}

Activity.savetolocalstorage = function(during_activity,allactivity,status){
    during_activity.status=status;
    localStorage['activitykey']=JSON.stringify(allactivity);
    localStorage['during_activity']=JSON.stringify(during_activity);
    localStorage['current_activity']=JSON.stringify(during_activity);
    localStorage['during_activity_or_not']=JSON.stringify('1');
    if(status=="end"){
        localStorage['during_activity_or_not']=JSON.stringify('0');
    }

}

Activity.get_all_activity=function (){
    if(!localStorage.length){
        localStorage['activitykey']=JSON.stringify([]);
        localStorage['during_activity_or_not']=JSON.stringify('0');
        return [];
    }
    return JSON.parse(localStorage['activitykey']);
}

Activity.judgestatus = function (buildarr) {

    var result = Activity.get_current_activity();
    var result=result.status;
    User.send_message(result,buildarr);

}

Activity.create__enable_item_page=function(){
    //isActivity going
    var result = JSON.parse(localStorage['during_activity_or_not']);
    if(result=='1'){
        return true;
    }
    else {
        return false;
    }
}
Activity.is_show_back_item_button =function (){
    var result = Activity.get_all_activity();
    if(result.length==0){
        return false;
    }
    else {
        return true;
    }

}
Activity.get_current_activity= function(){
    return JSON.parse(localStorage['current_activity']);
}

Activity.get_during_activity=function(){
    return JSON.parse(localStorage['during_activity']);
}

Activity.get_during_activity_status=function(){
    return JSON.parse(localStorage['during_activity']).status;
}

Activity.signup_page_button_status = function(){
    // var during_activity_status = Activity.get_during_activity_status();
    var result = Activity.get_during_activity().status;
    var is_activity_on = JSON.parse(localStorage['during_activity_or_not']);
    if(result=="unstart" && is_activity_on=="0"){
         return "unstart";

    }
    if(result=="unstart" && is_activity_on=="1"){
        return ;
    }
    if(result=="start"){
        return "start";
    }
    if(result=="end"&& is_activity_on=="0"){
        return "unstart";
    }
    if (result=="end" && is_activity_on=="1") {
        return ;
    }
    if(result=="onbid"){
        return "onbid";
    }
}
