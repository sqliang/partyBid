function Message (json_message) {
    var result_name_origin=json_message.messages[0].message.replace(/\s/g,'');
    this.type= result_name_origin.toLowerCase().substring(0,2);
    this.name= result_name_origin.toLowerCase().slice(2);
    this.phone = json_message.messages[0].phone;
}

Message.prototype.isRightmessage=function(json_message){

	if(this.type=="bm"){
        var Signupuser = new SignUpInfo(this.name,this.phone);
        Signupuser.back_message();

	}
	if(this.type=="jj"){
        var biduser = new Bid(this.phone,this.name);
        biduser.chose_load_by_status()
	}
};
Message.back_message=function (phone, type, status){
        var message_back = {
            "register_start": "恭喜！报名成功！^o^",
            "register_unstart": "活动尚未开始，请稍后~ >.<",
            "register_end": "Sorry，活动报名已结束.. =.=",
            "register_repeat": "您已经报过名了，请勿浪费短信费.. -_-||",
            "bid_run": "恭喜！您已出价成功！^o^",
            "bid_prepare": "竞价尚未开始，请稍后~ >.<",
            "bid_over": "Sorry，活动竞价已结束.. =.=",
            "bid_undefined": "对不起，您没有报名此次活动.. T.T",
            "bid_repeat": "您已成功出价，请勿重复出价.. -_-||"
        };
        var text = message_back[type + '_' + status];
        native_accessor.send_sms(phone,text);
};