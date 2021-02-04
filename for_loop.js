

function char_count(str, letter) //str = "hello" letter = "h"
{
 var count = 0;
 for (var i=0; i<str.length; i++) {
   var element = str[i];  //h
    if (element == letter) 
      {
         count = count + 1;
      }
  }
  return count;
}
console.log(char_count("ninaa", "a"));







function char_count(str, letter) //str = "hello" letter = "h"
{
 var count = 0;
 for (var i=0; i<str.length; i++) {
   var element = str[i];  //h
    if (element == letter) 
      {
         count = count + 1;
      }
  }
  return count;
}
console.log(char_count("ninaa", "a"));













function sum (num1, num2, num3){
    return num1+num2+num3;
  }
  
  
    function sumVat(input) {
      var sum = 0;
      for (var num of input) {
        sum = sum + num; 
      }
       
      console.log("sum = " + sum);
      console.log("VAT = " + sum * 0.2);
      console.log("total = " + sum * 1.2);
  }
   
  sumVat([1.20, 2.60, 3.50]);
  
  

  


var array = ["nina", "pepi", 8];


for (var i=0; i<array.length; i++) {  //0 1 2
   var element = array[i];  
    console.log(element);      //print all element of the array
}



for (var element of array) { //var elemet is var i=0...)
  console.log(element);  //print all elements of the array
}





for (var i=0; i<10; i=i+2) { //0123456789 //02468
   console.log(i);  //print 0-1000
}





