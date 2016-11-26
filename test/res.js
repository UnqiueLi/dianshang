$(function(){
    /*
    验证手机号码 正则
     */
    var flag=false;
    $("#tel").on("blur",function(){
        var regTel=/^1[34578]\d{9}$/;
        var telVal=$(this).val();
        if(regTel.test(telVal)){
            $("#tishi").show();
            $("#worn").show();
            $("#error").html("手机号码输入合法");
            $("#error").css("color","green");
            flag=true;
        }else{
            $("#tishi").show();
            $("#worn").show();
            $("#error").html("手机号码输入不合法");
            $("#error").css("color","red");
            flag=false;
        }
    })

    /*
    输入手机号码获取验证码 reslogin.js
     */
    var flag1=false;
    $("#hleft").on("click",function(){
        var tel = sendMessage();
    })
    $("#yan").on("blur",function(){
        var  yanVal=$("#yan").val();
        if(yanVal=="" || yanVal.length<6 || yanVal.length>6){
            $("#tishi").show();
            $("#worn").show();
            $("#error").html("验证码不合法");
            $("#error").css("color","red");
            flag1=false;
        }else{
            $("#tishi").show();
            $("#worn").show();
            $("#error").html("验证码合法");
            $("#error").css("color","green");
             flag1=true;
        }
    })
    //两周内登录认证cookiet
//    var telVal=$("#tel").val();
//    var sendCode=$("#yan").val();
    $("#btn").on("click",function(){
        if(flag && flag1){
            if($("#checkRed")[0].checked){
                $.cookie("userName",$("#tel").val(),{expires:14});
                $.cookie("pwdVal",$("#yan").val(),{expires:14});
            }
            open("../html/index.html");
        }else{
        }
    })
})
