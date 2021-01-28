### Write reusable code with functions
#### Functions can be reusable as many times we want, you can call or invoke the function by its name+(), everytime will do what we write inside of it. For example:

`function ourReusableFunction() {
    console.log("Hey World");
}`

`ourReusableFunction();` here we get Hey World

---

### Passing values to functions with arguments
#### Parameters are variables that add as placeholders for the values that it will be input to a function within its called. 

`function ourFunctionWithArgs(a, b) { 
    console.log(a - b);
}`
#### The values which we pass is called arguments - `(a, b) `could be anything, that means when the function is called we can pass data into the function. 
For examle:
`ourFunctionWithArgs(10, 5);`
So when the function runs it can use the information thats passed into the function. In this case:

`console.log(a - b);` it will be 10-5, because these numbers was passed into the function. And the output will be 5! 

---
### Global scope and functions
#### In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.
`var myGlobal = 10;`

`function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }`

  #### If we create variable within a function with `var` this will wotk only within the function. So we have to declare it without `var`.
  #### But if we create variable within a function without `var` we will be able to use it Globally. 

  ---

  ### Local scope and functions
#### When we create a variable within a function we cannot access it outside. For example:

`function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}`

`myLocalScope();`

`console.log(myVar);` here we will get myVar is not defined because we defined it inside the function

---
### Global vs Local scope in functions
#### It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

`var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}`
#### The function myFun will return "Head" because the local version of the variable is present.

---

### Return a value from a function with return
#### We can pass values into a function with arguments. You can use a `return` statement to send a value back out of a function.

`function minusSeven(num) {
    return num - 7;
}`

`console.log(minusSeven(10));` here we get 3, because we pass the function number 10, but we return the number minus 7. 

---

### Understanding Undefined value returned from a function
#### A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.

`var sum = 0;`

    `function addThree() {
        sum = sum + 3;
    }`

#### If we don't spevify a `return value`, the `return value` will be `undefined`. 
#### But `sum` will get the change and will add 3

---

### Assignment with a returned value
#### Everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable.

`var processed = 0;``

`function processArg(num) {
  return (num + 3) / 5;
}`

#### Here we have the function `processArg()` awhich is going to return the resolved `(num + 3) / 5;`

`processed = processArg(7);`

#### So when we call the function, the value from the `(num + 3) / 5;` is going to be stored in the variable `changed`

---

### Stand in line 
#### In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.
#### 

```javascript
function nextInLine(arr, item) {
    arr.push(item);
return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

```
#### We create a queue with array which we assign to a variable. We can modify the array by passing item, arr to it. In this case we add item in the end and we get item from the front of the queu. 
#### We will get:

```
Before: [1,2,3,4,5]
1
After: [2,3,4,5,6]`
```


---
### Boolean values
#### Another data type is the Boolean. Booleans may only be one of two values: true or false. They are basically little on-off switches, where true is "on" and false is "off." These two states are mutually exclusive.
 

`function welcomeToBooleans() {
    return false;
}`

---

### Use conditional logic with If statements

#### The if statements is used to make a decisions in code. The key word if tells javascript to execute the code in the curly brackets in certain conditions difined in the brackets. 

```javascript
function ourTrueOrFalse(isItTrue) {
if (isItTrue) { 
return "Yes, it is true";
   }
        return "No, it is false";
}

console.log(true);
```

#### here we get Yes, it is true

#### The statement ifItTrue, if it's true, 244row will be executed, if not 246row will be executed. 

---

### Comparison with the equality operator
#### The most basic operator is the equality operator ==. The equality operator compares two values and returns true if they're equivalent or false if they are not. 

```javascript
function equalityTest(myVal) {
  if (myVal == 10) {
     return "Equal";
  }
  return "Not Equal";
}

equalityTets(10);
```

#### If myVal is equal to 10, the equality operator returns true, so the code in the curly braces will execute, and the function will return "Equal". Otherwise, the function will return "Not Equal"
#### Here == is going to return true, even if it's 3=="3"

---

### Comparison with the strict equality operator
#### The difference between strict `===` and not strict `==` equality operator is that the strict one will return true if it's only the same type. For example `3 === 3`. But if it's `3 === "3"` is going to return false. 

```javascript
function testStrict(val) {
  if (val) { 
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);
```

---

### Practice comparing different values

```javascript
function compareEquality(a, b) {
  if (a === b) { 
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
```


#### `3 == '3'`  // returns true because JavaScript performs type conversion from string to number
#### `3 === '3'` // returns false because the types are different and type conversion is not performed

---



