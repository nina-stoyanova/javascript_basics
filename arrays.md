### Store multiple values with arrays 
#### Arrays allow you to store several peaces of data in one place. Array always start/end with a bracket. `[]` Every element in array is separated by `,`. We can add any data type elements.

`var ourArray = ["John" , 23];`

----

### Nested Arrays
#### When one of the elements of the array is another array, that is called nested array or multi-dimensional array. 

`var ouArray = [["the univers", 42], ["everything", 101010]];`

---

### Access array data with indexes 
#### We can select an element from the array with index

`var ourArray = [50, 60, 70];`

`var ourData = ourArray[0];` this will get 50

---

### Modify array data with indexes
#### We can modify arrays with indexes. We wasn't able to modify a string with bracket notation, but here we can. 

`var ourArray = [18,64,99];`

`ourArray[1] = 45;` here we modify the 1st element, using index 1

---

### Access multi-dimensional arrays with indexes

`var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14 ] ];`

#### So if we want to select value 8:

`var myData = myArray[2][1]` so first index `[2]` is for the second array inside the main array. The second index `[1]` is for the first element inside that array. 

----

### Manipulate Arrays with push()
#### We can use the function push in order to add array/s into THE END of existing array.

`var ouArray = ["Simpson", "J", "cat"];`

`ourArray.push(["happy", "joy"]);`

#### We get: Simpson, J, cat, happy, joy
---

### Manupulating arrays with pop()
#### We can remove an element from array with function pop(). This function remove THE LAST element of an array and put it into the variable:

`var ourArray = [1,2,3];`

`var removedFromOurArray = ourArray.pop();`

#### So here we have `ourArray = [1,2]` and the variable `removedFromOurArray = 3`


`var ourArray = [["John", 23], ["cat", 21]];`

`var removedFromOurArray = ourArray.pop();`

#### And here we get `ourArray = ["John", 23];` and the variable `removedFromOurArray = ["cat", 21];`
---

### Manupulate arrays with shift();
#### The function shift() is very similar to the function pop(), but instead remove THE FIRST element from an array.

`var ourArray = [["John", 23], ["cat", 21]];`

`var removedFromOurArray = ourArray.shift();`

#### Here we get: `var ourArray = ["cat", 21];` and `removedFromOurArray = ["John", 23];`
---

  ### Manupulate arrays with unshift()
#### The function `unshift()` is adding a element in the BEGINING  of the array (not like push() which add element IN THE END of the array). So if we remove element with `shift()` we can add element on the same place with `unshift()`

`var ourArray = ["Simpson", "J", "Cat"];`

`ourArray. shift();` this remove the first element "Simpson"

`ourArray.unshift("Happy");` this add the element "Happy"

---

### Shopping list
#### We can make a shopping list with nested arrays

`var myList = [["cereal", 1], ["eggs", 2], ["bananas", 4], ["milk", 2]];`

---

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

 