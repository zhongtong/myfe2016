require.config({
    paths:{
        'jquery':"jquery-1.12.4"
    }
});
require(["jquery","dialog"],function($,Dialog){
    $('#open').on('click',function(){
        var setting={
            width:500,
            height:400,
            title:'我的管理层',
            content:'login.html'
        };
        var dialog=new Dialog();
        dialog.open(setting);

    })
});