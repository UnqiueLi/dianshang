$("#more1").on("click",function() {
    //当准备插入文本时，先进行清空数据
    var count=1;
    $.ajax({
        type: "GET",//用get方式获取
        dataType: "json",//数据-->json格式
        url: "../json/more.json", //目标地址
        data: "wenzhang=",
        error: function (XMLHttpRequest, textStatus, errorThrown) {
        },
        success: function (data, textStatus, jqXHR) {
            if (textStatus == 'success') {
                    console.log(data.wenzhang);
//                for(var i=0;i<data.length;i++){
//                    if(data[i].pagNo==count){
//                        var wenzhang=data[i].wenzhang;
//                        for(var j=0;j<wenzhang.length;j++){
//                            var p=$("<span>"+wenzhang[j]+"</span>");
//                            $(".article").append(p);
//                        }
//                        count++;
////                                break;
//                    }
//                }
            }
        }
    })
    return false;
})