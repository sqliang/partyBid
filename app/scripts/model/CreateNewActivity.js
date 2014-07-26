function CreateNewActivity (argument) {
	// body...
}

CreateNewActivity.create=function(new_activity_name){

//add new activity to activity list
    var NewActivcityName = new_activity_name;
    var new_activity_object={};
    new_activity_object.name=NewActivcityName;
    new_activity_object.status="unstart"
    
    CreateNewActivity.save(new_activity_object);
    CreateNewActivity.create_new_activity_key(new_activity_name);
    CreateNewActivity.edit_during_activity(new_activity_object);

}

CreateNewActivity.save=function (result_object) {

	var result = JSON.parse(localStorage['activitykey']);
	result.push(result_object);
    localStorage['activitykey']=JSON.stringify(result);
	
}
CreateNewActivity.create_new_activity_key=function (argument) {
    var arr=[];
    localStorage[argument]=JSON.stringify(arr);
}
CreateNewActivity.edit_during_activity=function (argument) {
    localStorage['during_activity']=JSON.stringify(argument);
    localStorage['current_activity']=JSON.stringify(argument);
}