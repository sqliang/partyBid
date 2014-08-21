function SignUpInfo (name,phone){
    this.name = name;
    this.phone=phone;
}

SignUpInfo.prototype.save = function(){
    var current_activity_user = SignUpInfo.get_current_activity_users();
    current_activity_user.push(this);
    SignUpInfo.update_current_activity_users(current_activity_user);
};
SignUpInfo.prototype.back_message = function(){
    var status = Activity.get_current_activity().signup;
    var is_repeat = SignUpInfo.is_signup_repeat(this.phone);
    if(status=="start" && is_repeat){
        status="repeat";
    }
    if(status=="start" && !is_repeat)
    {
        this.save();
        Page_Refresh();
    }
    Message.back_message(this.phone,'register',status);
};

SignUpInfo.is_signup_repeat=function(telphone){
    return _.some(SignUpInfo.get_current_activity_users(),function(user){
        return user.phone==telphone});
};

SignUpInfo.show_signup_user =function (activityname){
    var chosed_obj=Activity.find_activity_by_name(activityname).name;
    return JSON.parse(localStorage[chosed_obj]);
};

SignUpInfo.update_current_activity_users=function(newusers){
    var current_name = Activity.get_current_activity().name;
    localStorage[current_name] = JSON.stringify(newusers);

};
SignUpInfo.get_current_activity_users=function(){
    var result = Activity.get_current_activity().name;
    return JSON.parse(localStorage[result]);
};


