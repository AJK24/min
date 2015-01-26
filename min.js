//Andrew Klump
//Chapter 3
//
//
// a function that will recieve two numbers and return which number is smaller.
var min = function (x,y){
       if(x<y){
         return x;	//prints only if x is less than y
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
