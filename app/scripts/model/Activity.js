function Activity (argument) {
	// body...
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

	var result = JSON.parse(localStorage['activitykey']);
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

    var result1 = JSON.parse(localStorage['activitykey']);
    for (var i=0;i<result1.length;i++){
        if (result1[i].name == argument){
            return true;
        }
    }
    return false;
}
Activity.show=function(){
    var arr1=JSON.parse(localStorage['activitykey']);
    arr1 = arr1.reverse();
    return arr1;

}


Activity.localStorage_length=function(){
    if(localStorage.length==0){
        return 0;
      }
      else {
        return 1;
      }
}
Activity.get_all_activity=function (){
    if(Activity.localStorage_length()==0){

        localStorage['activitykey']=JSON.stringify([]);
        localStorage['during_activity_or_not']=JSON.stringify('0');
        return [];
    }
    else {
        return JSON.parse(localStorage['activitykey']);
    }
}

Activity.judgestatus = function (buildarr) {

    var result = JSON.parse(localStorage['current_activity']);
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