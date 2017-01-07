/**
 * Created by Administrator on 2017/1/6.
 */
$(function(){
    $(":input").focus(function(){
        $(this).addClass("focus");
        if($(this).val()==this.defaultValue){
            $(this).val('');
        }
    }).blur(function(){
        $(this).removeClass("focus");
        if($(this).val()==''){
            this.value=this.defaultValue;
        }

    })
});