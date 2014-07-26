function ShowUsersList (argument) {
    var result = JSON.parse(localStorage['during_activity']).name;
    var users = JSON.parse(localStorage[result]);
    return users;	
}