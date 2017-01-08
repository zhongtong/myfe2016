
    $(function(){
     var $content=$("#content");
     $("#bigger").on("click",function(){
     if(!$content.is(":animated")){
     if($content.height()<500){
    $content.animate({height: "+=50"},400);
      }
    }
 });
     $("#smaller").on("click",function(){
     if(!$content.is(":animated")){
     if($content.height()>50){
     $content.animate({height: "-=50"},400);
        }
     }
 });
     });


