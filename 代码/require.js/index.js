//require.js
/*require(["a"],function(arrSort){
 var arr=[3,1,8,11,22];
 //var arr='skjbka';
 console.log(arrSort(arr));
 });*/

//sea.js
define(function(require){
    var arr=[3,1,8,11,22];
    var arrSort=require("a");
    console.log(arrSort(arr));
});