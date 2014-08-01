function activitystatus (argument) {


}
activitystatus.changeactivitystart=function(){

	var allactivity= JSON.parse(localStorage['activitykey']);
    var during_activity= JSON.parse(localStorage['during_activity']);
    var during_activity_name = during_activity.name;

    for(var i=0;i<allactivity.length;i++){
        if(allactivity[i].name==during_activity_name){
        	allactivity[i].status="start";
        	during_activity.status="start";
        	activitystatus.savetolocalstorage(during_activity,allactivity);
        }

    }
    localStorage['current_activity']=JSON.stringify(during_activity);
     localStorage['during_activity_or_not']=JSON.stringify('1');

}

activitystatus.changeactivityonbid=function(){

    var allactivity= JSON.parse(localStorage['activitykey']);
    var during_activity= JSON.parse(localStorage['during_activity']);
    var during_activity_name = during_activity.name;

    for(var i=0;i<allactivity.length;i++){
        if(allactivity[i].name==during_activity_name){
            allactivity[i].status="onbid";
            during_activity.status="onbid";
            activitystatus.savetolocalstorage(during_activity,allactivity);
        }

    }
    localStorage['current_activity']=JSON.stringify(during_activity);
    localStorage['during_activity_or_not']=JSON.stringify('1');

}


activitystatus.changeactivityend=function(){

	var allactivity= JSON.parse(localStorage['activitykey']);
    var during_activity= JSON.parse(localStorage['during_activity']);
    var during_activity_name = during_activity.name;

    for(var i=0;i<allactivity.length;i++){
        if(allactivity[i].name==during_activity_name){
            allactivity[i].status="end";
            during_activity.status="end";
            activitystatus.savetolocalstorage(during_activity,allactivity);

        }

    }
    localStorage['current_activity']=JSON.stringify(during_activity);
    localStorage['during_activity_or_not']=JSON.stringify('0');

}


activitystatus.savetolocalstorage=function(during_activity,allactivity){
    localStorage['during_activity']=JSON.stringify(during_activity);
    localStorage['activitykey']=JSON.stringify(allactivity);

}




          