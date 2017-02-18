require(['carousel'],function(Carousel){
    var imgArr1=['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'];
    var setting1={
        selector:'#container1',//轮播图显示的位置
        imgs:imgArr1,//表示显示的图片
        bottonStyle:'circle',//square表示索引的样式
        arrowsPos:'bottom',//center表示前后按钮的位置
        speed:500//表示图片轮换的速度
    };
    var carousel1=new Carousel();
    carousel1.init(setting1);
    var imgArr2=['img/1.jpg','img/2.jpg','img/3.jpg'];
    var setting2={
        selector:'#container2',//轮播图显示的位置
        imgs:imgArr2,//表示显示的图片
        bottonStyle:'square',//square表示索引的样式
        arrowsPos:'center',//center表示前后按钮的位置
        speed:1000//表示图片轮换的速度
    };
    var carouse2=new Carousel();
    carouse2.init(setting2);
});