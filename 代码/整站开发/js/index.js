require(['carousel'],function(Carousel){
    var imgArr1=['img/banner01.png','img/banner02.png','img/banner03.png','img/banner04.png'];
    var setting1={
        selector:'#imgs',//�ֲ�ͼ��ʾ��λ��
        imgs:imgArr1,//��ʾ��ʾ��ͼƬ
        bottonStyle:'circle',//square��ʾ��������ʽ
        arrowsPos:'bottom',//center��ʾǰ��ť��λ��
        speed:1000//��ʾͼƬ�ֻ����ٶ�
    };
    var carousel1=new Carousel();
    carousel1.init(setting1);
});