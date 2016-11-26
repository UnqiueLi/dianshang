/**
 * Created by Master on 2016/11/3.
 */
/**
 * Created by Master on 2016/11/2.
 */
//图片放大镜效果
$(function(){
    $(".jqzoom").jqueryzoom({xzoom:478,yzoom:478});
});
//全局函数
//Tab控制函数
function tabs(tabId, tabNum){
    //设置点击后的切换样式
    $(tabId + " .tab li").removeClass("curr");
    $(tabId + " .tab li").eq(tabNum).addClass("curr");
    //根据参数决定显示内容
    $(tabId + " .tabcon").hide();
    $(tabId + " .tabcon").eq(tabNum).show();
}
/*
 全局函数
 图片详细页函数
 鼠标经过预览图片函数
 */
function preview(img){
    $("#preview .jqzoom img").attr("src",$(img).attr("src"));
    $("#preview .jqzoom img").attr("jqimg",$(img).attr("bimg"));
}
//图片预览小图移动效果,页面加载时触发
$(function(){
    var tempLength = 0; //临时变量,当前移动的长度
    var viewNum = 5; //设置每次显示图片的个数量
    var moveNum = 2; //每次移动的数量
    var moveTime = 300; //移动速度,毫秒
    var scrollDiv = $(".spec-scroll .items ul"); //进行移动动画的容器
    var scrollItems = $(".spec-scroll .items ul li"); //移动容器里的集合
    var moveLength = scrollItems.eq(0).width() * moveNum; //计算每次移动的长度
    var countLength = (scrollItems.length - viewNum) * scrollItems.eq(0).width(); //计算总长度,总个数*单个长度
    //下一张
    $(".spec-scroll .next").bind("click",function(){
        if(tempLength < countLength){
            if((countLength - tempLength) > moveLength){
                scrollDiv.animate({left:"-=" + moveLength + "px"}, moveTime);
                tempLength += moveLength;
            }else{
                scrollDiv.animate({left:"-=" + (countLength - tempLength) + "px"}, moveTime);
                tempLength += (countLength - tempLength);
            }
        }
    });
    //上一张
    $(".spec-scroll .prev").bind("click",function(){
        if(tempLength > 0){
            if(tempLength > moveLength){
                scrollDiv.animate({left: "+=" + moveLength + "px"}, moveTime);
                tempLength -= moveLength;
            }else{
                scrollDiv.animate({left: "+=" + tempLength + "px"}, moveTime);
                tempLength = 0;
            }
        }
    });

    /*
     会员价下拉菜单
     */
    $(".hidebox").on({
        'mouseover':function(){
            $(".huiyuan").css("border-bottom","none");
            $(".hidehuiyuan").show();
        },
        'mouseout':function(){
            $(".huiyuan").css("border-bottom","");
            $(".hidehuiyuan").hide();
        }
    })

    $(".jiantourow").on('click',function(){
        $(".fen").empty();
        $(".huodong").css("height","100");
        $.ajax({
            type: "GET",//用get方式获取
            dataType: "json",//数据-->json格式
            url: "../json/activemeg.json", //目标地址
            error: function (XMLHttpRequest, textStatus, errorThrown) {
            },
            success: function (data, textStatus, jqXHR) {
                if (textStatus == 'success') {
                    console.log(data);
                    for(var i=0;i<data.length;i++){
                        var list=data[i].list;
                        for(var j=0;j<list.length;j++){
                            var p="<p>"+list[j]+"</p>";
                            $(".fen").append(p);
                        }
                    }
                }
            }
        })
        return false;
    })

    /*
     点击色系的时候，边框变红
     字体hover变颜色
     */
    $(".colorlist .rightcol span").on('click',function(){
        $(this).siblings().removeAttr("class","activeShop");
        $(this).attr("class","activeShop");
    })

    /*
     单个产品数量选择
     */

//    $("#btnav").on('click',function(){
//        var count=parseInt($("#inputA").val());
//        if(count>0){
//           if(count==0){
//               count==0;
//           }else{
//               $("#inputA").val(--count);
//           }
//        }else{
//        }
//    })
//        $("#btnadd").on('click',function(){
//            var count=parseInt($("#inputA").val());
//
//         if(count>0){
//            if(count==0){
////                 count==0;
//            }else{
//                 $("#inputA").val(++count);
//             }
//        }
//        else{
//            }
//    })
    var count=parseInt($("#inputA").val());
    if(count>0){
        if(count==0){
            count==0;
        }else{
            $("#btnav").on('click',function(){
                $("#inputA").val(--count);
            })
            $("#btnadd").on('click',function(){
                $("#inputA").val(++count);
            })
        }
    }
    /*
     图片详情透明度
     */
    $(".imgS").on({
        'mouseover':function(){
            $("hideIm").css("visibility","visible");
        }
    })
})
