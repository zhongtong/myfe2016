define(['jquery'],function($){
    function Carousel(){
        this.defaultSetting={
            selector:'body',//轮播图显示的位置
            imgs:[],//表示显示的图片
            bottonStyle:'circle',//square表示索引的样式
            arrowsPos:'bottom',//center表示前后按钮的位置
            speed:500//表示图片轮换的速度
        };
        this.container=$('<div class="carousel-container"></div>');
        this.imgs=$(' <div class="carousel-imgs"></div>');
        this.tab=$('<ul class="carousel-tab">');
        this.arrows=$('<div class="carousel-arrows"></div>');
        this.prev=$('<span class="carousel-arrows-prev">&lt;</span>');
        this.next=$('  <span class="carousel-arrows-next">&gt;</span>');
    }
    Carousel.prototype.init=function(options) {
        $.extend(this.defaultSetting, options);
        for (var i = 0; i < this.defaultSetting.imgs.length; i++) {
            var $img = $('<img src="' + this.defaultSetting.imgs[i] + '">');
            this.imgs.append($img);
            var $li = $('<li></li>');
            if (this.defaultSetting.bottonStyle == 'square') {
                $li.html(i + 1);
            } else {
                $li.addClass('circle');
            }
            this.tab.append($li);
        }
        $('img', this.imgs).eq(0).addClass('selected');
        $('li', this.tab).eq(0).addClass('selected');
        this.arrows.append(this.prev).append(this.next);
        this.container.append(this.arrows).append(this.imgs).append(this.tab);
        $(this.defaultSetting.selector).append(this.container);
        if (this.defaultSetting.arrowsPos == 'center') {
            $('span', this.arrows).addClass('center');
            this.arrows.removeClass("carousel-arrows");

        }
        var nowIdx = 0;
        var that=this;
        this.tab.on('mouseover', 'li', function () {
            nowIdx = $(this).index();
            changeImg();
        });
        this.prev.on('click',function(){
            nowIdx--;
            if(nowIdx==-1){
                nowIdx=that.defaultSetting.imgs.length-1;
            }
            changeImg();
        });
        this.next.on('click',function(){
            nowIdx++;
            if(nowIdx==that.defaultSetting.imgs.length){
                nowIdx=0;
            }
            changeImg();
        });
        this.container.hover(function(){
            clearInterval(that.timer);
        },function(){
            run();
        });
        run();
        function run(){
            that.timer=setInterval(function(){
                that.next.trigger('click');
            },that.defaultSetting.speed);
        }

        function changeImg() {
            $('li', that.tab).eq(nowIdx).addClass('selected').siblings().removeClass('selected');
            $('img', that.imgs).eq(nowIdx).addClass('selected').siblings().removeClass('selected');
        }
    };
    return Carousel;

});