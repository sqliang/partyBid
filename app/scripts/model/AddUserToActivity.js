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
        localStorage[this.name]=JSON.stringify(arr);
    }
    var result = JSON.parse(localStorage[this.name])
    var name = json_message.messages[0].message.slice(2);
    var telphone = json_message.messages[0].phone;
    var price = 0;
    var buildarr={name:name,phone:telphone,price:price};
    result.push(buildarr);
    localStorage[this.name]=JSON.stringify(result);

}

AddUserToActivity.get_chose_restaurant_name = function () {
    return localStorage.getItem('restaurant_name');
}