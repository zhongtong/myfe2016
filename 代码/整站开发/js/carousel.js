define(['jquery'],function($){
    function Carousel(){
        this.defaultSetting={
            selector:'body',//�ֲ�ͼ��ʾ��λ��
            imgs:[],//��ʾ��ʾ��ͼƬ
            bottonStyle:'circle',//square��ʾ��������ʽ
            arrowsPos:'bottom',//center��ʾǰ��ť��λ��
            speed:500//��ʾͼƬ�ֻ����ٶ�
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