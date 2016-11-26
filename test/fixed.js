/**
 * Created by Master on 2016/11/7.
 */
$(function(){
    /*
     导航固定
     */
    var a = $('#navfix'),
        b =a.offset();
    $(document).on('scroll',function(){
        var	c = $(document).scrollTop();
        if(b.top<=c){
            a.css({'position':'fixed','top':'0px'})
        }else{
            a.css({'position':'absolute','top':'0px'})
        }
    })
})