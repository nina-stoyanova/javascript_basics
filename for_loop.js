

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

//EXCERSISEC OF JS FUNDAMENTALS $ ESSENTIALS




var sumLength = 0; //sum of the length of all strings 

var count = sumLength.length;

function strings(str){ // "nina"    //// COUNT THE LETTERS OF NINA
    
    for (i=0; i<str.length; i++){
        var element = str[i];  //n
        sumLength = sumLength +1; 
    }

}
strings("nina");
console.log(count);






function strings (str, str1, str2) {  //COUNT THE SUM OF THE CHARACTERS IN THE STRINGS + SUM THE AVERAGE NUMBER

    
  var sumStr = str + str1 + str2;
  var sumLetters = sumStr.length;
  console.log(sumLetters);

  var averageLength = 0;
  averageLength = Math.floor(sumLetters/3);
  console.log(averageLength);
}
//console.log(strings("nina", "pepi", "dora"));






// '+', '-', '*', '/', '%', '**'.  

function solve(num1, num2, str){  //CALCULATE 2NUMBERS WITH STRING(SPECIAL CHARACTER)
  var result;
  switch(str) {
      case "+": result = num1 + num2; break;
      case "-": result = num1 - num2; break;
      case "*": result = num1 * num2; break;
      case "/": result = num1 / num2; break;
      case "%": result = num1 % num2; break;
      case "**": result = num1 ** num2; break;
  }
  console.log(result);

}

solve(5, 6, "*");






function solve(n, m){  // SUM OF NUMBERS N & M

  var result= 0;
  var num1 = Number(n);
  var num2 = Number(m);

  for (var i = num1; i <= num2; i++) {
      result = result +i;
  }
  return result;

}
console.log(solve("-8", "20"));
