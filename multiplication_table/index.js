//Create new index.js file, write program output 9*9 times table. The output is as follows：

/*
1*1=1
2*1=2 2*2=4
3*1=3 3*2=6 3*3=9
……
9*1=9 9*2=18 9*3=27 …… 9*9=81
*/

var str = "";
for(var i=1;i<=9;i++){
  for(var j=1;j<=i;j++){
    str += i + "*" + j + "=" + i*j + " ";
    if(i == j){
      str += "\n";
    }
  }
}
console.log(str);
