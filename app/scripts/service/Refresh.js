function Page_Refresh () {
	var refresh_page = document.getElementById("refresh_user_num");
    if (refresh_page) {  
        var scope = angular.element(refresh_page).scope();  
        scope.$apply(function () {  
        	var during_name= JSON.parse(localStorage['current_activity']).name;
        	var result=JSON.parse(localStorage[during_name]);
            scope.users_data= result;
            scope.user_num='('+result.length+'人'+')';
        })  
    }  
}

function refresh_bid_signup_page(){
    var refresh_page = document.getElementById("wrapper");
    if (refresh_page) {  
        var scope = angular.element(refresh_page).scope();  
        scope.$apply(function () { 
        var current_bid = JSON.parse(localStorage['current_bid']);
        var result = BidInfo.show_current_bid_user(current_bid);
        scope.bid_users= result;
        scope.bid_num='('+result.length+'人'+')';
        })  
    }  


}