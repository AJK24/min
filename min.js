var min = function (x,y){
       if(x<y){
         return x;
       }
       else//if x and y are the same the same number will also be printed
	 return y;
}


 console.log(min(0, 10));
// // -> 0
console.log(min(0, 0));
// 0
 console.log(min(0, -10));
// // -> -10
