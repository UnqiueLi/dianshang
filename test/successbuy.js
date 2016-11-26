/**
 * Created by Administrator on 2016/11/6.
 */
$(function(){
        var index=0;
        var lastIndex= $(".bottomF .lunbotusu").children("li").length;
//        console.log(lastIndex)
        var timer;
        timer = setInterval(Next,2000);
        $(".bottomF .lunbotusu").hover(function(){
            clearInterval(timer);
        },function(){
             timer=setInterval(Next,2000);
        })
        function Next(){
            $(".bottomF .lunbotusu").animate({left:index*(-300)},1500);
            index++;
            if(index>=lastIndex){
                index=0;
            }
        }
})

