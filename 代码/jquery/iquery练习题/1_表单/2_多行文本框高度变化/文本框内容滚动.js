/**
 * Created by Administrator on 2017/1/6.
 */
$(function(){
    var $content=$("#content");
   $("#up").on("click",function(){
       if(!$content.is(":animated")){
           $content.animate({scrollTop:"-=30"},400);
       }
   });
    $("#down").on("click",function(){
        if(!$content.is(":animated")){
            $content.animate({scrollTop:"+=30"},400);
        }
    });
});