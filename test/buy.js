/**
 * Created by Administrator on 2016/11/5.
 */
$(function(){

    /*
    对用户的姓名 地址 手机号码做判断
     */

    /*
    对姓名
     */
//    var spanIf=$(".alertaddressbox");
//    var flag=false;
//   $(".nameshou").on("blur",function(){
//       var regAN=/[\u4E00-\u9FA5]{2,5}(?:·[\u4E00-\u9FA5]{2,5})*/;
//       var addressName=$(".nameshou").val();
//       if(regAN.test(addressName)){
//           spanIf.html("收货人姓名合法");
//           spanIf.css("color","green");
//           flag=true;
//       }else{
//           spanIf.html("收货人姓名不合法");
//           spanIf.css("color","red");
//           flag=false;
//       }
//   });

//   var flag1=false;
//    $(".address").on("blur",function(){
//        var regAddress=/^(?=.*?[\u4E00-\u9FA5])[\d\u4E00-\u9FA5]+/;
//        if(regAddress.test(($(this).val()))){
//            spanIf.html("详细地址合法");
//            spanIf.css("color","green");
//            flag1=true;
//        }else{
//            spanIf.html("详细地址不合法");
//            spanIf.css("color","red");
//            flag1=false;
//        }
//    });

//    var flag2=false;
//    $(".tel").on("blur",function(){
//        var regTel=/^1(3|4|5|7|8)\d{9}$/;
//        if(regTel.test(($(this).val()))){
//            spanIf.html("手机号码合法");
//            spanIf.css("color","green");
//            flag2=true;
//        }else{
//            spanIf.html("手机号码不合法");
//            spanIf.css("color","red");
//            flag2=false;
//        }
//    });

//    $(".addressspan1").on("click",function(){
//        if(flag && flag1 && flag2){
//            alert("信息添加成功");
//        }else{
//            alert("信息添加失败")
//        }
//    })

  /*
  送货方式
   */
//    $(".get-way ul li").on('click',function(){
//        $(this).siblings().removeAttr("class",".check");
//        $(this).attr("class","check");
//    })

})
