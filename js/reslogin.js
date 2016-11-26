/**
 * Created by Master on 2016/10/27.
 */
var InterValObj;//timer变量，控制时间
var count = 60;//间隔函数 ,1秒执行
var curCount;//当前剩余秒数
var code= "";//验证码
var codeLength = 6; //验证码长度
function sendMessage(){
    var result;
    curCount=count;
    var telVal=$("#tel").val(); //手机号码
    var regTel=/^1[34578]\d{9}$/;
    if(telVal !="" && regTel.test(telVal)){
        //产生验证码
        for(var i=0;i<codeLength;i++){
            code += parseInt(Math.random()*9).toString();
            console.log(code);
        }
        //设置获取验证码的效果
        $("#hleft").attr("disabled","true");
        $("#hleft").val("请在"+curCount+"秒内输入");
        //启动计时器，1秒执行一次
        InterValObj=window.setInterval(SetRemainTime,1000);
        $.ajax({
            type:"GET",//用get方式获取
            dataType:"json",//数据-->json格式
            url:"../json/tel.json", //目标地址
            data:"telVal="+telVal+"&code="+code,
            error:function(XMLHttpRequest,textStatus,errorThrown){
            },
            success:function(data,textStatus,jqXHR){
                if(textStatus == 'success'){
                    //tel json数据里面定义的
                    var tel = JSON.parse(data).tel;
                   console.log(tel);
                }
            }
        });
    }else{
        alert("手机号码不能为空");
    }
}
function SetRemainTime(){
    if(curCount==0){
        window.clearInterval(InterValObj);//停止计时器
        $("#hleft").removeAttr("disabled");//启用按钮
        $("#hleft").val("重新发送验证码");
        /*
         清除验证码
         如果不清除，时间过后，输入收到的验证码依然有效
         */
        code="";
    }else{
        curCount--;
        $("#hleft").val("请在"+curCount+"秒内输入");
    }
}