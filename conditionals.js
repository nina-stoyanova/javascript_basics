


var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

processed = processArg(7);



function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));



function ourTrueOrFalse(isItTrue) {
    if (isItTrue) { 
        return "Yes, it is true";
    }
    return "No, it is false";
}



function equalityTest(myVal) {
    if (myVal == 10) {
        return "Equal";
    }
    return "Not Equal";
}

equalityTets(10);



function testStrict(val) {
    if (val) { 
        return "Equal";
    }
    return "Not Equal";
}

testStrict(10);  


function compareEquality(a, b) {
    if (a === b) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

compareEquality(10, "10");



function testNotEqual(val) {
    if (val != 99) {
        return "Not equal";
    }
    return "Equal";
}
    console.log(testNotEqual(10));


    function testStrictNotEqual(val) {
        if (val !== 17) {
            return "Not equal";
        }
        return "Equal";
    }
    console.log(testStrictNotEqual(10));


    function testGreaterThenOperator(val) {
        if (val > 100) {
            return "over 100";
        }
        if (val > 10) {
            return "over 10";
        }
        return "10 or under";
    }
    console.log(testGreaterThenOperator(10));


    function greaterThenOrEqual(val) {
        if (val >= 20) {
            return "20 or over";
        }
        if (val >= 10) {
            return "10 or over";
        }
        return "Less then 10";
    }
    console.log(greaterThenOrEqual(10));

    function testLessThen(val) {
        if (val < 25) {
            return "Under 25";
        }
        if (val < 55){
            return "Under 55";
        }
        return "55 or over";
    }
    console.log(testLessThen(10));


    function testLessOrEqual(val) {
        if (val <= 12) {
            return "Smaller or equal to 12";
        }
        if (val <= 24) {
            return "Smaller or equal to 24";
        }
        return "More then 24";
    }
    console.log(testLessOrEqual(10));



    

function testLogicalEnd(val) {
    if (val <=50 && val >= 25) {
        return "Yes";
    }
    return "No";
}
console.log(testLogicalEnd(45));


function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Insight";
}
console.log(testLogicalOr(1));



function testElse(val) {
    if (val > 5) {
        return "bigger then 5";
    }
    else{
        return "less then 5";
    }
}
console.log(testElse(4));


function testElseIf(val) {
    if (val > 10) {
        return "greater than 10";
    }
    else if (val < 5) {
        return "smaller then 5";
    }
    else{
        return "in between";
    }
}
console.log(testElseIf(7));



function orderMyLogic(val) {
    if (val < 5) {
        return "less then 5";
    }
    else if (val < 10) {
        return 'less then 10';
    }
    else {
        return "greater then or equal to 10";
    }
}
console.log(orderMyLogic(11));


function chainingIfElse(val) {
    if (val < 5) {
        return "less then 5";
    }
    else if (val < 10) {
        return "less then 10";
    }
    else if (val < 15) {
        return "less then 15";
    }
    else if (val < 20) {
        return "less then 20";
    }
    else {
        return "more then 20";
    }
}
console.log(chainingIfElse(21));
    






  var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  
if (strokes==1){
  return names[0];
}
else if (strokes <=par-2) {
  return names[1];
}
else if (strokes == par-1) {
  return names[2];
}
else if (strokes == par) {
  return names[3];
}
else if (strokes == par+1){
  return names[4];
    }
else if (strokes == par+2){
  return names[5];
  }
else if (strokes >= par + 3){
  return names[6];
  }
}


golfScore(5, 4);



function caseInSwitch(val) {
    var answer = "";
    
  switch(val) {
    case 1:
    answer = "alpha";
    break;
    case 2:
    answer = "beta";
    break;
    case 3:
    answer = "gamma";
    break;
    case 4:
    answer = "delta";
    break;
  
  }
  
  }
  
  console.log(caseInSwitch(1));







  function switchOfStuff(val) {
    var answer = "";
  
  switch(val) {
    case "a":
      answer = "apple";
      break
    case  "b":
      answer = "bird";
      break;
    case "c":
    answer = "cat";
    break;
    default:
    answer = "stuff";
    break;  
  
  }
    
    return answer;
  }
  
  console.log(switchOfStuff("c"));



  function sequentialSizes(val) {
    var answer = "";
    // Only change code below this line
  switch(val){
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;  
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  
  
    // Only change code above this line
    return answer;
  }
  
  sequentialSizes(1);





  function chainToSwitch(val) {
    var answer = "";
    // Only change code below this line
  switch(val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;  
  }
    
  
    // Only change code above this line
    return answer;
  }
  
  console.log(chainToSwitch(1));



  function isLess(a, b) {
    
    return a < b ;
  }
  isLess(10, 15);





// Setup
function abTest(a, b) {
    
    if (a<0 || b<0) {
      return undefined;
    }
    
      return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
    }
    
    console.log(abTest(5,5));




    var count = 0;

function cc(card) {
  
switch(card) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    answer = count ++;
    break;
  case 10:
  case "J":
  case "Q":
  case "K":
  case "A":
    answer = count --;
    break;
}

  var holdBet = "Hold";
  if (count > 0) {
    holdBet = "Bet";
  }

  return count + " " + holdBet;
  
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
console.log(cc(10));

