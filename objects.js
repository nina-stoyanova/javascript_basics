var myDog = {
    
    "name": "Elza",
    "legs": 4,
    "tails": 1,
    "friends":["Nina", "Alex"]
    
    };
    console.log(myDog.name); //here we select the first property "name"




 
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  
  var entreeValue = testObj["an entree"];   // Change this line
  var drinkValue = testObj["the drink"];    // Change this line





var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  

  myDog.name = "Happy Coder"




  var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  myDog.bark = "woof"
  console.log(myDog["bark"]);




  var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  var playerNumber = 16;       // how we say is 16 just with = 16???
  var player = testObj[playerNumber];   



var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  

  myDog.name = "Happy Coder"

  console.log(myDog["name"]);




  
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
  
  delete myDog.tails;
  console.log(myDog);


  
var myObj = {          
    gift: "pony",  
    pet: "kitten",
    dog: "small"
};


function checkObj(obj, propName) {
     if (obj.hasOwnProperty(propName)) {  
        return obj[propName];   
    }else {
        return "Not Found"
    }
  }
  console.log(checkObj(myObj, "gift"));



  
function phoneticLookup(propName) {
  
    var lookup = {
      "alpha":"Adams",
      "bravo":"Boston",
      "charlie":"Chicago",
      "delta":"Denver",
      "echo":"Easy",
      "foxtrot":"Frank"
    }
  
     var result = lookup[propName];  
      return result;
    }
    
    console.log(phoneticLookup("charlie"));
  

    

    var someObj = {
        propName: "John"
      };
    
    
    
      function addPrefixToString(str) {  //add something on the left
        var s = "prop";
        return s + str;
      }
    
      var newString = "alex";
      var array = ["petar", "dora"];
    
    
    var newProperty = addPrefixToString(someObj.propName);
    
    someObj.x = newProperty;
    console.log(someObj);
    

    

    


var myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
   
    {
      "artist":"Beau Carnes",
      "title":"Cereal Man",
      "release_year": 2003,
      "formats": [
        "Youtube video"
      ]
    }
  ];







var myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  var gloveBoxContents = myStorage.car.outside.trunk; 
console.log(gloveBoxContents);




var myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  

  
  var secondTree = myPlants[0].list[2]; 
  console.log(secondTree);





  
var object = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: [],
      final: {
          age: 29
      }
    },
    5439: {
      albumTitle: 'ABBA Gold'
    },
    new:[]
  };

  console.log(object["1245"].final.age);


