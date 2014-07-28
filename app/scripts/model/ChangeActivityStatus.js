function changeactivitystatus (argument) {


}
changeactivitystatus.changeactivitystart=function(){

	var allactivity= JSON.parse(localStorage['activitykey']);
    var during_activity= JSON.parse(localStorage['during_activity']);
    var during_activity_name = during_activity.name;

    for(var i=0;i<allactivity.length;i++){
        if(allactivity[i].name==during_activity_name){
        	allactivity[i].status="start";
        	during_activity.status="start";
        	changeactivitystatus.savetolocalstorage(during_activity,allactivity);
        }

    }
    localStorage['current_activity']=JSON.stringify(during_activity);
     localStorage['during_activity_or_not']=JSON.stringify('1');

}

changeactivitystatus.changeactivityend=function(){

	var allactivity= JSON.parse(localStorage['activitykey']);
    var during_activity= JSON.parse(localStorage['during_activity']);
    var during_activity_name = during_activity.name;

    for(var i=0;i<allactivity.length;i++){
        if(allactivity[i].name==during_activity_name){
            allactivity[i].status="end";
            during_activity.status="end";
            changeactivitystatus.savetolocalstorage(during_activity,allactivity);

        }

    }
    localStorage['current_activity']=JSON.stringify(during_activity);
    localStorage['during_activity_or_not']=JSON.stringify('0');

}

changeactivitystatus.changebuttonstatus =function (argument) {
	var allactivity= JSON.parse(localStorage['activitykey']);
    var during_activity= JSON.parse(localStorage['during_activity']);
    var during_activity_name = during_activity.name;
    if(during_activity.status=="start"){
    	return "结束";
    }
    else {
    	return "开始";
    }
	
}

changeactivitystatus.savetolocalstorage=function(during_activity,allactivity){
	localStorage['during_activity']=JSON.stringify(during_activity);
	localStorage['activitykey']=JSON.stringify(allactivity);

}
changeactivitystatus.buttonable=function(argument) {
	var result = JSON.parse(localStorage['current_activity']).status;
	if ( result=="start" && argument=="开始" || result=="end" || argument=="结束" ){
		return true;
	}
	else {
		return false;
	}
}



          