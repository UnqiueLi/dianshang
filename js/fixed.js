/**
 * Created by Master on 2016/11/7.
 */
$(function(){
    /*
     导航固定
     */
    var a = $('#nav-bottom'),b =a.offset();
    $(document).on('scroll',function(){
        var	c = $(document).scrollTop();
        if(b.top<=c){
            a.css({'position':'fixed','top':'0px'})
        }else{
            a.css({'position':'absolute','top':'0px'})
        }
    })
    /*
     回到顶部
     */
    $(".tab-logo_top").on('click',function(){
        $('body,html').animate({scrollTop:0},2000);
    })
})
