/**
 * Created by Administrator on 2016/11/6.
 */
$(function(){
    /*
     菜单栏
     */
    $(".attr_brand_small span").on({
        "mouseenter":function(){
            $(this).siblings().removeAttr('class','small_hover');
            $(this).attr('class','small_hover');
            var index=$(this).index();
            $(".brand_allc_br ul li").hide();
            $('.brand_allc_br ul li:eq('+index+')').show();
        }
    })


    /*
    主板图片效果
     */
    $(".datailmid ul li").on({
        'mouseenter':function(){
            $(this).css("border","8px solid #eee")
        },
        'mouseleave':function(){
            $(this).css("border","")
        }
    });

    /*
    点击关闭
     */
    $(".clos").on('click',function(){
        $('.brandsearche_alltype').css('display',"none");
        $('.hid').css('display',"none");
    })
})