require(['carousel'],function(Carousel){
    var imgArr1=['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'];
    var setting1={
        selector:'#container1',//�ֲ�ͼ��ʾ��λ��
        imgs:imgArr1,//��ʾ��ʾ��ͼƬ
        bottonStyle:'circle',//square��ʾ��������ʽ
        arrowsPos:'bottom',//center��ʾǰ��ť��λ��
        speed:500//��ʾͼƬ�ֻ����ٶ�
    };
    var carousel1=new Carousel();
    carousel1.init(setting1);
    var imgArr2=['img/1.jpg','img/2.jpg','img/3.jpg'];
    var setting2={
        selector:'#container2',//�ֲ�ͼ��ʾ��λ��
        imgs:imgArr2,//��ʾ��ʾ��ͼƬ
        bottonStyle:'square',//square��ʾ��������ʽ
        arrowsPos:'center',//center��ʾǰ��ť��λ��
        speed:1000//��ʾͼƬ�ֻ����ٶ�
    };
    var carouse2=new Carousel();
    carouse2.init(setting2);
});