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

