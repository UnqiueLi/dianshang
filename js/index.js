/**
 * Created by Master on 2016/10/28.
 */
$(function(){
    /*
    登录cookie判定
     */
    if($.cookie("userName",$('#userTel').val())){
        $(".denglv").children('a').remove();
        $(".denglv").html( "你好&nbsp;&nbsp;"+($.cookie("userName",$('#userTel').val())));
    }

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
             鼠标划到商品分类时，下拉列表划出
             */
            $(".shapping").on("mouseover",function(){
                $(".nav").show();
            })
            $(".shapping").on("mouseout",function(){
                $(".nav").hide();
            })

            $(".nav ul li h2 a").mouseenter(function(){
                $(this).css("text-decoration","underline");
            })
            $(".nav ul li h2 a").mouseleave(function(){
                $(this).css("text-decoration","none");
            })

            $(".nav ul li a").mouseenter(function(){
                $(this).css("text-decoration","underline");
            })
            $(".nav ul li a").mouseleave(function(){
                $(this).css("text-decoration","none");
            })
            $(".lineunder").mouseover(function(){
                 $(this).css("text-decoration","none");
             })
            $(".interindex a").mouseenter(function(){
                $(this).css("text-decoration","none");
            })

             /*
             品牌旗舰特效
              */
            $(".imgHide").on({
                'mouseenter':function(){
                    $(this).stop(true,false).animate({
                        top:0
                    },350);
                },
                'mouseleave':function(){
                    $(this).stop(true,false).animate({
                        top:100
                    },350);
                }
            })
    /*
    热门轮播logo
     */
    var lis=$(".hotflagbox");
    var hotNum = 0;
    $(".hotfu .hotpre").on("click",function(){
        if(hotNum == 0)return;
        hotNum--;
        lis.animate({left:hotNum*(-1210)},1000);
    })
    $(".hotfu .hotnext").on("click",function(){
        if(hotNum == lis.children('li').size()-1)return;
        hotNum++;
        lis.animate({left:hotNum*(-1210)},1000);
    })
    /*
    商场同款
     */
    $(".shophot li").mouseenter(function(){
        $(this).siblings(".duan").attr("class","duan");
        $(this).attr("class",'active duan');
        $(".hotCol_box").stop(true,false).animate({left:$(this).index()*(-1210)},1000);
    })
    $(".topSame").on({
        'mouseenter':function(){
            $(this).children(".mony").animate({left:-20},300);
            $(this).children(".moveIng").animate({left:20},300);
        },
        'mouseleave':function(){
            $(this).children(".mony").animate({left:0},300);
            $(this).children(".moveIng").animate({left:0},300);
        }
    })

     /*
      购物中心
     */
    $(".shoppingtop li").on({
        'mouseenter':function(){
            $(this).find(".shopcenterbox").stop(true,false).animate({top:-50},300);
        },
        'mouseleave':function(){
            $(this).find(".shopcenterbox").stop(true,false).animate({top:0},300);
        }
    })

    /*
    购物中心的logo轮播
     */
    lunboLogo( $("#balogo ol").children("li"),$("#balogo .sliderbox"));
    lunboLogo( $("#balogo1 ol").children("li"),$("#balogo1 .sliderbox"));
    lunboLogo( $("#balogo2 ol").children("li"),$("#balogo2 .sliderbox"));
    lunboLogo( $("#balogo3 ol").children("li"),$("#balogo3 .sliderbox"));
    lunboLogo( $("#balogo4 ol").children("li"),$("#balogo4 .sliderbox"));
    /*
    对轮播logo转动的封装
     */
    function lunboLogo(obj1,obj2){
        obj1.on("click",function(){
            obj2.animate({left:$(this).index()*(-224)},1500);
            $(this).siblings().attr("class","");
            $(this).attr("class","active1");
            index = $(this).index();
        });
        var index=0;
        var lastIndex=obj2.children("li").length;
//        console.log(lastIndex)
//        var timer;
//        timer = setInterval(Next,2000);
        $(".slider").hover(function(){
//            clearInterval(timer);
        },function(){
//             timer=setInterval(Next,2000);
        })
//
        function Next(){
            obj2.animate({left:index*(-224)},1500);
            obj1.eq(index).attr("class","active1");
            obj1.eq(index).siblings().attr("class","");
            index++;
            if(index>=lastIndex){
                index=0;
            }
        }
    }

})