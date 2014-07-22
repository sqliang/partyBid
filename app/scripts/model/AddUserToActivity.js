function AddUserToActivity(during_activity_name) {
    this.name = during_activity_name;
}

AddUserToActivity.get_all_restaurants = function () {
    return restaurants_data
}

AddUserToActivity.prototype.save = function (json_message) {

    try{
        JSON.parse(localStorage[this.name])
    }catch(err){
        var arr=[];
        arr.push(json_message);
        console.log(this.name);
        localStorage[this.name]=JSON.stringify(arr);
    }
//    var result = JSON.parse(localStorage[this.name]);
//    result.push(json_message);
//    console.log(result.messages[0]);
    //console.log(JSON.stringify(json_message));



    //localStorage.setItem("restaurant_name", this.name);
    //console.log(this.name);

}

AddUserToActivity.get_chose_restaurant_name = function () {
    return localStorage.getItem('restaurant_name');
}