/**
 * Created by Master on 2016/11/7.
 */
$(function(){
    /*
     菜单栏
     */
//    $(".attr_brand_small span").on({
//        "mouseenter":function(){
//            $(this).siblings().removeAttr('class','small_hover');
//            $(this).attr('class','small_hover');
//            var index=$(this).index();
//            console.log(index);
//            $(".brand_allc_br ul li").hide();
//            console.log(1);
//            $('.brand_allc_br ul li:eq('+index+')').show();
//            console.log(2)
//        }
//    })
//    $("#brand_attr").on('click',function(){
//        $("#ul4").show();
//        $(this).children('b').attr("class","xiangshang");
//        $(this).html("收起");
//    })


//  收起
//  "更多选项（材质、色系、袖型、风格等"

    $("#brand_attr").on('click',function(){
        var self = this;
        $("#ul4").toggle(function(){
            $(self).find('span').text(function(i,oldtext){
                console.log(oldtext)
                if(oldtext == "更多选项（材质、色系、袖型、风格等"){
                    return "收起"
                }else if(oldtext == "收起"){
                    return "更多选项（材质、色系、袖型、风格等"
                }
            });
            $(self).children('b').toggleClass("class", "xiangshang");
        })
    })


    /*
     主板图片效果
     */
//    $(".datailmid ul li").on({
//        'mouseenter':function(){
//            $(this).css("border","8px solid #eee")
//        },
//        'mouseleave':function(){
//            $(this).css("border","")
//        }
//    });
})
