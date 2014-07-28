function Page_Refresh () {
	var refresh_page = document.getElementById("wrapper");  
    if (refresh_page) {  
        var scope = angular.element(refresh_page).scope();  
        scope.$apply(function () {  
        	var during_name= JSON.parse(localStorage['during_activity']).name;
        	var result=JSON.parse(localStorage[during_name]);
            scope.users_data= result;
            scope.user_num='('+result.length+'人'+')';
        })  
    }  
}