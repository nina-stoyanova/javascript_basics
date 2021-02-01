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
#### The inequality operator (!=) is the opposite of the equality operator. It means "Not Equal" and returns false where equality would return true
#### 1 !=  2     // true
#### 1 != "1"    // false
#### 1 != '1'    // false
#### 1 != true   // false
#### 0 != false  // false

```javascript
function testNotEqual(val) {
  if (val != 99) { 
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);
```
#### Here we get "Not Equal"

---

### Comparison with the Strict Inequality Operator
#### The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true
#### 3 !==  3   // false
#### 3 !== '3'  // true
#### 4 !==  3   // true

```javascript
function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not equal";
    }
    return "Equal";
}
console.log(testStrictNotEqual(10));
```
#### here we get not equal
---

### Comparison with the Greater Than Operator
#### The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.
#### 5   >  3   // true
#### 7   > '3'  // true
#### 2   >  3   // false
#### '1' >  9   // false

```javascript
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
```
#### here we get "10 or under"
---
### Comparison with the Greater Than OperatorPassed
#### The greater than or equal to operator (>=) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns true. Otherwise, it returns false.
#### 6   >=  6   // true
#### 7   >= '3'  // true
#### 2   >=  3   // false
#### '7' >=  9   // false

```javascript
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
```

#### here we get 10 of over
---


### Comparison with the Less Than Operator
#### The less than operator (<) compares the values of two numbers. If the number to the left is less than the number to the right, it returns true. Otherwise, it returns false. 
#### 2   < 5  // true
#### '3' < 7  // true
#### 5   < 5  // false
#### 3   < 2  // false
#### '8' < 4  // false

```javascript
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
```
#### here we get Under 25
---

### Comparison with the Less Than Or Equal To Operator
#### If the number to the left is less than or equal to the number to the right, it returns true. If the number on the left is greater than the number on the right, it returns false.
#### 4   <= 5  // true
####  '7' <= 7  // true
####  5   <= 5  // true
####  3   <= 2  // false
####  '8' <= 4  // false

```javascript
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
```
#### here we get Smaller or equal to 12
---

### Comparisons with the Logical And Operator
#### Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.

```javascript


function testLogicalEnd(val) {
    if (val <=50 && val >= 25) {
        return "Yes";
    }
    return "No";
}
console.log(testLogicalEnd(45));
```
#### here we get Yes
---

### Comparisons with the Logical Or Operator
#### The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

```javascript
function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Insight";
}
console.log(testLogicalOr(1));
```
#### here we get Outside
---

### Introducing Else Statements
#### When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. With an else statement, an alternate block of code can be executed.

```javascript

function testElse(val) {
    if (val > 5) {
        return "bigger then 5";
    }
    else{
        return "less then 5";
    }
}
console.log(testElse(4));
```

#### here we get less then 5
---


### Introducing Else If Statements
#### If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.

```javascript
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
```

#### here we get in between
---

### Logical Order in If Else Statements
#### Order is important in if, else if statements.The function is executed from top to bottom so you will want to be careful of what statement comes first.

```javascript 
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
```

#### here we get greater then or equal to 10
---

### Chaining If Else Statements
#### if/else statements can be chained together for complex logic. Here is pseudocode of multiple chained if / else if statements:

```javascript
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
```

#### here we get more then 20
---









