function SignUpInfo (name,phone,price){
    this.name = name;
    this.phone=phone;
    this.price=price;
}

SignUpInfo.prototype.save = function(){
    var current_activity_status = Activity.get_current_activity().signup;
    Message.back_message(this.phone,'register',current_activity_status);
};

SignUpInfo.get_current_activity_status=function(){

};
