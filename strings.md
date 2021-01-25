Variable
===

	- Escape sequences in strings

	\'  single quote
	\'  double quote
	\\  backslash
	\n  newline
	\r  carriage return
	\t  tab
	\b  backspace
	\f  form feed
	
	var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"

### Concatenating strings with Plus Operator

`var ourStr = "I come first. " + "I come second."'`

#### We get: I come first. I come second. 
---


### Concatenating strings with Plus equals operator

`var ourStr = "I come first. ";`

`ourStr += "I come second.";`

#### We get: I come first. I come second. 
---

### Constructingstrings with variables

`var ourName = "freeCodeCamp";`

`var ourStr  = "Hello, our name is " + ourName + ", how are you?";`

#### We get: Hello, our name is freeCodeCamp, how are you?
---

### Appending variables to Strings

`var anAdjective = "Awesome";`

`var ourStr = "freeCodeCamp is";`

`ourStr += anAdjective`

#### We get: freeCodeCamp is Awesome
---

### Find Length of String

`var firstNameLength = 0;`

`var firstName = "Ada";`

`firstNameLength = firstName.length;`
#### Here `.length` is property, we ask for the length of the first name, so we get 3
---

### Bracket notation to find first character in string
Bracket notation is a way to get a character in a specific index in a string. 
 Most programming languages start counting from 0, which is called zero-based indexing. 

 `var firstLetterOfFirstName = "";`

 `var firstName = "Ada";`

 `firstLetterOfFirstName = firstName[0];`

#### So here we ask for the first letter of `Ada` 
---

 ### String Immutability 

 Strings are immutable, meaning they can't be altered once created. This doesn't mean they cannot be changed. 

 `var myStr = "Jello World";`

 `myStr = "Hello Worlds";`

----

### Bracket notation to find Nth character in string 

`var firstName = "Ada";`

`var secondLetterOfFirstName = firstName[1];`

#### Here we get the second letter of Ada
---

### Bracket notation to find last character in string

We can find the last letter in a string even when we don't know how many letters are in that string. 

`var firstName = "Ada";`

`var lastLetterOfFirstName = firstName[firstName.length-1];`

#### Here we get the last letter of the first name 
---

### Bracket notation to find Nth-to-Last character in string

We can also get the 3rd the last letter of 4rd the last letter. You just substract how much you want from the length from the string. 

`var firstName = "Ada";`

`var lastLetterOfFirstName = firstName[firstName.length-3];`

#### Here we get the 3rd last letter of the first name 
---


### Word blanks 
#### We will now use our knowledge of strings to build a "Mad Libs" style word game we're calling "Word Blanks". In a "Mad Libs" game, you are provided sentences with some missing words, like nouns, verbs, adjectives and adverbs. You then fill in the missing pieces with words of your choice in a way that the completed sentence makes sense.

`function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {`

`var result = "";`

`	return result; `

`}`

#### Here you can call the function and you have to pass in a certain types or words. Then we are calling the function and passing the words:

`console.log(wordBlanks("dog", "big", "ran", "quickly"));`

#### We have to add to the result:

`result += "The " + myAdjective + myNoun + myVerb + " to the store " + myAdverb; `

#### We need to add spaces between the words:

`result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb; `

#### Here we get: The big dog ran to the store quickly

#### We can add different words:

`console.log(wordBlanks("bike", "slow", "flew", "slowly"));`

#### Here we get: The slow bike flew to the store slowly
---

