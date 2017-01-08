/**
 * Created by Administrator on 2017/1/6.
 */
$(function(){
    var $content=$("#content");
    $("#bigger").on("click",function(){
        $content.height($content.height()<500?$content.height()+50:$content.height());
    });
    $("#smaller").on("click",function(){
        $content.height($content.height()>50?$content.height()-50:$content.height());
    });
});