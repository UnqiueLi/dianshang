/**
 * Created by Master on 2016/11/2.
 */
$(function(){
    /*
     我的潮流
     鼠标移上 下拉框出现/消失
     字体变化特效
     */
    $(".five").on("mouseover",function(){
        $("#goods").stop().slideDown(300);
        $(".road").css("background","url('../images/brandstore_share.png') no-repeat -351px -476px");
    })
    $(".five").on("mouseout",function(){
        $("#goods").stop().slideUp(300);
        $(".road").css("background","");
    })
    $(".five li a").on("mouseover",function(){
        $(this).css("color","#cf0201")
    })
    $(".five li a").on("mouseout",function(){
        $(this).css("color","")
    })

    /*
     手机二维码
     */
    $(".phone").on("mouseover",function(){
        $("#picture").stop().slideDown(300);
        $(".phone span").css("color","#cf0201");
        $(".phone span").find(".wei").css("background","url('../images/brandstore_share.png') no-repeat -285px -411px");
    })
    $(".phone").on("mouseout",function(){
        $("#picture").stop().slideUp(300);
        $(".phone span").css("color","");
        $(".phone span").find(".wei").css("background","");
    })

    /*
    品牌授权
    */
    $(".imgtop").on({
        'mouseenter':function(){
            $(this).stop(true,false).animate({top:3},350);
        },
        'mouseleave':function(){
            $(this).stop(true,false).animate({top:9},350);
        }
    })

    /*
    侧边的菜单栏
     */
    $('.list ul li p').clickdown();
    $('.list-se .title').clickup();
    $('.list>ul>li').ad();

    /*
    浏览商品
     */
    $(".ul3 li").on({
        'mouseover':function(){
            $(this).siblings().removeAttr("class","active4");
            $(this).attr("class","active4");
            $(".lunbo1").animate({left:($(this).index())*(-795)},350)
        }
    })

    /*
    轮播
     */
    var hotNum = 5;
    $(".pre").on('click',function(){
        if(hotNum==0)return;
        hotNum--;
        $(".firstOn").stop().animate({left:hotNum*(-190)},1000)
    })
    $(".next").on('click',function(){
        if(hotNum==$(".firstOn").children("li").size()-1)return;
        hotNum++;
        $(".firstOn").stop().animate({left:hotNum*(-190)},1000)
    })
    /*

     */

})