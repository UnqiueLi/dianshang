/**
 * Created by Master on 2016/10/28.
 */
$(function(){
    /*
    密码登录
    用户名输入
     */
    var flag=false;
    $("#userTel").on("blur",function(){
        var regU=/^[a-zA-z][a-zA-Z0-9_]{2,9}$/;
        var regT=/^1[34578]\d{9}$/;
        var regE=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        var userTelVal=$("#userTel").val();

        if(regU.test(userTelVal) || regT.test(userTelVal) ||regE.test(userTelVal)){
            $("#tishi").show();
            $("#worn").show();
            $("#error").html("您的输入合法");
            $("#error").css("color","green");
            flag=true;
        }else{
            $("#tishi").show();
            $("#worn").show();
            $("#error").html("您的输入不合法");
            $("#error").css("color","red");
            flag=false;
        }
    })

    /*
    密码验证
     */
    var flag1=false;
    $("#pwd").on("blur",function(){
        var regP=/^[a-zA-Z]\w{5,17}$/;
        var pwdVal=$("#pwd").val();
        if(regP.test(pwdVal)){
            $("#tishi").show();
            $("#worn").show();
            $("#error").html("密码输入合法");
            $("#error").css("color","green");
            flag1=true;
        }else{
            $("#tishi").show();
            $("#worn").show();
            $("#error").html("密码输入不合法");
            $("#error").css("color","red");
            flag1=false;
        }
    })

    /*
    两周免登陆
     */
//    var userTelVal=$("#userTel").val();
//    var pwdVal=$("#pwd").val();
    $("#btn").on("click",function(){
        if(flag && flag1){
            if($("#checkRed")[0].checked){
                $.cookie("userName",$('#userTel').val(),{expires:14});
                $.cookie("pwdVal",$("#pwd").val(),{expires:14});
            }
            open("../html/index.html");
        }else{
        }
    })
})