/**
 * Created by Master on 2016/11/1.
 */
$(function(){
    /*
    品牌故事解析json数据
     */
    $("#story").on("click",function() {
            //当准备插入文本时，先进行清空数据
            delete $(".article").empty();
            var count=1;
            $.ajax({
                type: "GET",//用get方式获取
                dataType: "json",//数据-->json格式
                url: "../json/story.json", //目标地址
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                },
                success: function (data, textStatus, jqXHR) {
                    if (textStatus == 'success') {
//                    console.log(data.wenzhang);
                        for(var i=0;i<data.length;i++){
                            if(data[i].pagNo==count){
                                var wenzhang=data[i].wenzhang;
                                for(var j=0;j<wenzhang.length;j++){
                                    var p=$("<span>"+wenzhang[j]+"</span>");
                                    $(".article").append(p);
                                }
                              count++;
//                                break;
                            }
                        }
                        }
                    }
            })
            return false;
        })
    /*
    当点击关注的时候，累计加1
     */
//     $("#btn").on('click',function(){
//         $(this).html("已关注");
//     })
    /*
    价格区间
     */
    $(".datailPrice span").on('click',function(){
        $('.datailPrice span').removeClass('active2');
        $(this).attr('class','active2');
    });


    /*
    解析json数据，加载多个图片
     */
    var count=1;
    $("#more1").on("click",function() {
        //当准备插入文本时，先进行清空数据
        $.ajax({
            type: "GET",//用get方式获取
            dataType: "json",//数据-->json格式
            url: "../json/more.json", //目标地址
            error: function (XMLHttpRequest, textStatus, errorThrown) {
//               console.log(textStatus)
            },
            success: function (data, textStatus, jqXHR) {
//                console.log(textStatus)
                if (textStatus == 'success') {
                  for(var i=0;i<data.length;i++){
//                      console.log(data[i]);
                        if(data[i].listImg==count){
//                            console.log(count);
                            var list=data[i].list;
                            for(var j=0;j<list.length;j++){
                                var img=$('<li class="filtr-item" data-category="4" >'
                                    +'<b class="run"/>'
                                    +"<a>"+"<img src="+list[j].url+" class=\"\rresponsive-img\"\/>"+"</a>"
                                    +"<p>"+"张欣怡同款红色金属链条肩带小牛皮小猪单"+"</p>"
                                    +"<p>"+"<span>"+"&yen;169090.00"+"</span>"+"<p>"
                                    +'</li>');
                                img.attr("class","logohot");
                                $("#ul2").append(img);
                            }
                            count++;
                            break;
                        }else{
                            $("#more1").html("加载继续");
                        }
                  }
                }
            }
        })
         return false;

    })

    /*
     详细模版
     图片效果
     */
    $('.datailmid ul').on('mouseenter','li',function(){
        $(this).css("border","8px solid #eee")
    })
    $('.datailmid ul').on('mouseleave','li',function(){
        $(this).css("border","")
    })
})