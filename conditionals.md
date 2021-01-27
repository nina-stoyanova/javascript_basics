### Use conditional logic with If statements

#### The if statements is used to make a decisions in code. The key word if tells javascript to execute the code in the curly brackets in certain conditions difined in the brackets. 

`function ourTrueOrFalse(isItTrue) {
if (isItTrue) { 
return "Yes, it is true";
   `}
        `return "No, it is false";
}`

`console.log(true);`
#### here we get Yes, it is true

#### The statement ifItTrue, if it's true, 244row will be executed, if not 246row will be executed. 

---

### Comparison with the equality operator
#### The most basic operator is the equality operator ==. The equality operator compares two values and returns true if they're equivalent or false if they are not. 

`function equalityTest(myVal) {
  if (myVal == 10) {
     return "Equal";
  }
  return "Not Equal";
}`

`equalityTets(10);`

#### If myVal is equal to 10, the equality operator returns true, so the code in the curly braces will execute, and the function will return "Equal". Otherwise, the function will return "Not Equal"
#### Here == is going to return true, even if it's 3=="3"

---

### Comparison with the strict equality operator
#### The difference between strict `===` and not strict `==` equality operator is that the strict one will return true if it's only the same type. For example `3 === 3`. But if it's `3 === "3"` is going to return false. 

`function testStrict(val) {
  if (val) { 
    return "Equal";
  }
  return "Not Equal";
}`

`testStrict(10);`

---

### Practice comparing different values

`function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}`

`compareEquality(10, "10");`

#### `3 == '3'`  // returns true because JavaScript performs type conversion from string to number
#### `3 === '3'` // returns false because the types are different and type conversion is not performed

---

### Comparison with the inequality operator


