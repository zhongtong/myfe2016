require(['carousel'],function(Carousel){
    var imgArr1=['img/banner01.png','img/banner02.png','img/banner03.png','img/banner04.png'];
    var setting1={
        selector:'#imgs',//轮播图显示的位置
        imgs:imgArr1,//表示显示的图片
        bottonStyle:'circle',//square表示索引的样式
        arrowsPos:'bottom',//center表示前后按钮的位置
        speed:1000//表示图片轮换的速度
    };
    var carousel1=new Carousel();
    carousel1.init(setting1);
});