require.config({
    paths:{
        'jquery':"jquery-1.12.4"
    }
});
define(['jquery'],function($){
    function Dialog(){
        this.defaultSetting={
            width:400,
            height:300,
            title:'弹出层',
            content:''
        };
        this.container=$('<div class="dialog-container"></div>');
        this.mask=$('<div class="dialog-mask"></div>');
        this.box = $('<div class="dialog-box"></div>');
        this.title =  $('<div class="dialog-title">');
        this.item = $('<div class="dialog-title-item"></div>');
        this.close = $('<div class="dialog-title-close">[X]</div>');
        this.content = $('<div class="dialog-content"></div>');
    }
    Dialog.prototype.open=function(options){
        $.extend(this.defaultSetting,options);
        this.item.html(this.defaultSetting.title);
        this.title.append(this.item).append(this.close);
        this.content.css({height:this.defaultSetting.width-30});
        if(this.defaultSetting.content){this.content.load(this.defaultSetting.content);}
        this.box.append(this.title).append(this.content).css({
            width:this.defaultSetting.width,
            height:this.defaultSetting.height,
            marginTop:-this.defaultSetting.height/2,
            marginLeft:-this.defaultSetting.width/2
        });
        this.container.append(this.mask).append(this.box);
        $(document.body).append(this.container);
        var that=this;
        this.close.on('click',function(){
            that.closeDialog();
        });

    };
    Dialog.prototype.closeDialog=function(){
        this.container.remove();
    };

    return Dialog;
});