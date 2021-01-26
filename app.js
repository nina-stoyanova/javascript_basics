
function ourReusableFunction() {
    console.log("Hey World");
}
ourReusableFunction();

function ourFunctionWithArgs(a, b) { 
    console.log(a - b);
}

ourFunctionWithArgs(10, 5)
console.log(a - b);





function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
      output += "myGlobal: " + myGlobal;
    }




    function myLocalScope() {
        var myVar = 5;
        console.log(myVar);
    }
    myLocalScope();
    console.log(myVar);





    var someVar = "Hat";
    function myFun() {
      var someVar = "Head";
      return someVar;
    }





    function minusSeven(num) {
        return num - 7;
    }
    console.log(minusSeven(10));




    var sum = 0;
    function addThree() {
        sum = sum + 3;
    }

