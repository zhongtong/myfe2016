/**
 * Created by Administrator on 2016/11/27.
 */
(function(){
    var oContainer=document.getElementById('container');
    var oSmallImage=document.getElementById('small-image');
    var oBigImage=document.getElementById('big-image');
    var aBigPic=oBigImage.getElementsByTagName('img');
    var aSmallPic=oSmallImage.getElementsByTagName('img');
    var oInfo=document.getElementById('info');
    var oNowNum=document.getElementById('now-num');
    var oPrev=document.getElementById('prev');
    var oNext=document.getElementById('next');
    var iNow=0;
    var zIndex=8;
    for(var i=0;i<aSmallPic.length;i++){
        aSmallPic[i].className='small-opacity';
    }
    aSmallPic[iNow].className='selected';

    oPrev.style.opacity=oNext.style.opacity=0;
    oPrev.style.filter=oNext.style.filter='alpha(opacity=0)';
    oPrev.onmouseover=oNext.onmouseover=function(){
        animate(this,{opacity:100});
    };
    oPrev.onmouseout=oNext.onmouseout=function(){
        animate(this,{opacity:0});
    }

   oPrev.onclick=oNext.onclick=function(){
       if(this==oNext){
           iNow++;
           if(iNow==aBigPic.length){
               iNow=0;
           }
       }else{
        iNow--;
           if(iNow==-1){
               iNow=aBigPic.length-1;
           }
       }
       changeImg(iNow);
   };

    for(var i=0; i<aSmallPic.length; i++){
        aSmallPic[i].index = i;
        aSmallPic[i].onmouseover = function(){
            animate(this, {
                opacity: 100
            });
        };
        aSmallPic[i].onmouseout = function(){
            if(this.index != iNow){
                animate(this, {
                    opacity: 30
                });
            }
        };
        aSmallPic[i].onclick = function(){
            if(this.index != iNow){
                changeImg(this.index);
            }
        };
    }
    var timer;
    run();
    function run(){
        timer=setInterval(function(){
            oNext.onclick();
        },1000)
    }
    oContainer.onmouseover=function(){
        clearInterval(timer);
    };
    oContainer.onmouseout=function(){
        run();
    };



    function changeImg(index){
        iNow=index;
        aBigPic[index].style.opacity=0;
        aBigPic[index].style.filter='alpha(opacity=0)';
        aBigPic[index].style.zIndex=zIndex++;
            animate(aBigPic[index],{
                opacity:100
            });
            oPrev.style.zIndex=oNext.style.zIndex=oInfo.style.zIndex=zIndex++;
           oNowNum.innerHTML=index+1;
        for(var i=0;i<aSmallPic.length;i++){
            aSmallPic[i].style.opacity = 0.3;
            aSmallPic[i].style.filter = "alpha(opacity=30)";
        }
        aSmallPic[index].style.opacity =1;
        aSmallPic[index].style.filter = "alpha(opacity=100)";

        var iLeft=0;
        if(index==0||index==1){
           iLeft=0;
        }else if(index==aSmallPic.length-1||index==aSmallPic.length-2){
           iLeft=aSmallPic.length/2;
        }else{
            iLeft=index-1;
        }
        animate(oSmallImage,{
            left:-iLeft*aSmallPic[0].offsetWidth
        });

    }








})()