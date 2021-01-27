


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

