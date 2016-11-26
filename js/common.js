/**
 * Created by Master on 2016/11/8.
 */
$(function(){
    /*
    固定侧边导航
    回到顶部
     */
    $(".tab-logo").on({
        'mouseenter':function(){
            $(this).next(".tab-tip").show();
        },
        'mouseleave':function(){
            $(this).next(".tab-tip").hide();
        }
    })
})