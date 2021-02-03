



var myArray = [];


var i = 0;
while(i <= 5) {
  myArray.push(i);
  i=i+1;
}
console.log(myArray); //ascending order

// 0: 0
// 1: 1
// 2: 2
// 3: 3
// 4: 4
// 5: 5


var myArray = [];


for (i=1; i<10; i+=2) {
    myArray.push(i);
}
console.log(myArray);//odd numbers ascending order

// 0: 1
// 1: 3
// 2: 5
// 3: 7
// 4: 9



var myArray = [];


for (i=0; i<10; i+=2) {
    myArray.push(i);
}
console.log(myArray);//even numbers ascending order

// 0: 0
// 1: 2
// 2: 4
// 3: 6
// 4: 8



var myArray = [];


for (i=10; i>0; i-=2){
    myArray.push(i);
}
console.log(myArray); //even numbers descending order

// 0: 10
// 1: 8
// 2: 6
// 3: 4
// 4: 2



var myArray = [];

for (var i=9; i>0; i-=2){
    myArray.push(i);
}
console.log(myArray);// odd numbers descending order

// 0: 9
// 1: 7
// 2: 5
// 3: 3
// 4: 1



var arr = [10, 9, 8, 7, 6];
for (var i = 0; i < arr.length; i++) {
   
}
console.log(arr);


// 0: 10
// 1: 9
// 2: 8
// 3: 7
// 4: 6




var myArr = [ 2, 3, 4, 5, 6];


var total = 0;
for (var i=0; i<myArr.length; i++) {
    total = total + myArr[i];
}
console.log(total); // is 20

// 0: 2
// 1: 3
// 2: 4
// 3: 5
// 4: 6


var myArray = [];

for (i = 1; i<6; i++){ // if it's var is only inside the loop, if not is global
    myArray.push(i);
}
console.log(myArray);


function multiplyAll(arr) { 
    var product = 1;
   
  for (var i=0; i<arr.length; i++) {
    for (var j=0; j<arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }
  
    return product;
    
  }
  var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
  console.log(product);
  

  

  
var myArray = []; // do ... while
var i = 10;

 do {
  myArray.push(i);
  i++;
} while (i < 5);
// console.log(myArray, i);




function sum(arr, n) { // Replace Loops using Recursion 

    if(n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  
    
  }

  

  

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
  ];
  
  // The function should check if name is an actual contact's firstName 
  //and the given property (prop) is a property of that contact.
  
  // If both are true, then return the "value" of that property.
  
  // If name does not correspond to any contacts then return "No such contact".
  
  // If prop does not correspond to any valid properties of a contact 
  //found to match name then return "No such property".
  
  
  function lookUpProfile(name, prop){ //again very complicated
  
  
  for (let x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
  
  }
  
  lookUpProfile("Akira", "likes");