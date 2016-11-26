/**
 * Created by Master on 2016/10/29.
 */
/**
 * Created by Master on 2016/10/28.
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
     搜索框
     */
    $("#gover_search_key").on("keydown",function(){
        $("#inp").css("border-bottom","none");
    })
    $("#gover_search_key").on("keyup",function(){
        $("#inp").css("border-bottom","");
    })
    /*
     购物车
     渐入渐出
     */
    $("#nav-4").on("mouseover",function(){
        $(".nav-a").stop().fadeIn(500);
    })
    $("#nav-4").on("mouseout",function(){
        $(".nav-a").stop().fadeOut(500);
    })

    /*
     轮播设置
     */
    //设置
    myFocus.set({
        id:'myFocus',//ID
        pattern:'mF_fancy'//风格
    });

    /*
     导航固定
     */
    var a = $('#nav-bottom'),
        b =a.offset();
    $(document).on('scroll',function(){
        var	c = $(document).scrollTop();
        if(b.top<=c){
            a.css({'position':'fixed','top':'0px'})
        }else{
            a.css({'position':'absolute','top':'0px'})
        }
    })

    /*
     导航内部效果 logo
     */
    $('#icon_wrap li').on({
        'mouseenter':function(){
            $(this).siblings('li').stop(true,false).animate({
                width:30
            },350)
            $(this).stop(true,false).animate({
                width:200
            },350)
        },
        'mouseleave':function(){
            $(this).stop(true,false).animate({
                width:30
            },350)
        }
    })
    /*
     菜单下拉导航
     */
    $(".nav ul li").mouseenter(function(){
        $(this).children().css("color","#c69c6d");
        $(this).children(".zicaidan").show();
        $(this).children().find(".jiantou").show();
        $(this).css("background","rgba(255,255,255,0.9)");
    });

    $(".nav ul li").mouseleave(function(){
        $(this).children(".zicaidan").hide();
        $(this).children().css("color","");
        $(this).children().find(".jiantou").hide();
        $(this).css("background","");
    });

    /*
    介于下面的过于繁琐
    特进行简化
     */
    $(".nav ul li h2 a").mouseenter(function(){
        $(this).css("text-decoration","underline");
    })
    $(".nav ul li h2 a").mouseout(function(){
        $(this).css("text-decoration","none");
    })

    $(".nav ul li a").mouseenter(function(){
        $(this).css("text-decoration","underline");
    })
    $(".nav ul li a").mouseout(function(){
        $(this).css("text-decoration","none");
    })
//        $(".inter h2 a").mouseover(function(){
//            $(this).css("text-decoration","underline");
//        })
//         $(".inter h2 a").mouseout(function(){
//               $(this).css("text-decoration","none");
//        })
//        $(".inter .showbag li a").mouseenter(function(){
//              $(this).css("text-decoration","underline");
//         })
//          $(".inter .showbag li a").mouseleave(function(){
//          $(this).css("text-decoration","none");
//            })
})