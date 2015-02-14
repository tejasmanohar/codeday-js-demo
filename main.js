// Simple Language Features

// Comments (will not be read as code)

/*
  Block Comments (none of this will be read as code)

  Some symbols you will see:

  () parentheses group evaluations and parameters.
    example:   (7+5) * 4
           if(x == 2)
           function(firstParam, secondParam)

  {} braces define scope and objects
    example:  { title: "Tutorial" }
          function(p){ alert(p) }

  [] brackets indicate Arrays
    example:  titleList[0]          x = []

    [0,1,2,3,4]

    .length

  ;  semicolons end a statement
    They are not necessarily required, but they ARE recommended.
    It keeps the language neat.
    example:  x = 2;
          alert("hello");

  =  equals sign denotes assignment.
    example:  x = 5;
          y = x;

  SHORTCUTS:

  +=5  add five to this variable  // 5 could be any number
    example:  x+=5;

    x = x + 5;
    x+=5;
    x+=6

    x-=
    x*=

  ++  increment this variable by 1
    example: x++;

    x = 1;
    x++;

    ++x

    x == 2


  COMPARISONS:


    == double equals sign means evaluation.
      example:  if (x == 5)
            if (y == x)

    != not equals.  Check to see if two things ARE NOT equal
      example:  if (x != 5)

    < less than (is the left smaller than the right)
      example:  if (x < 5)

  > greater than (is the left larger than the right)
    example:  if (x > 5)

  <= less than or equal to
  >= greater than or equal to

    && double ampersand indicates that both sides of an evaluation must be true
      example:  if (x == 5 && x != 6)

    || double pipe indicates that either side of an evaluation must be true
      example:  if (x == 5 || x == 6)

*/



/*

  JavaScript is a non-compiled language.
    It is interpreted by the device on the fly.

  JavaScript is the most popular language in the world.
    An interpreter for JavaScript comes with all major browsers these days.

  Everything in JavaScript is considered to be an "object"
    Booleans, Numbers and Strings will be passed as Value types
    Everything else is passed as Reference types

    Value types:
      x = 5;
      y = x;
      y = 6;

      x = "test";

      x == y ?  false

      that's because x and y represent only VALUES


    Reference types:
      x = { value : 5, railroad : "$200" };
      y = x;
      y.mortgaged = true;

      x.value == y.value ?  true

      this is because y is a REFERENCE to x


*/

// variable declaration

var x;

var x = null;

// variable assignment

x = 6;

// combined declaration/assignment

var x = 6;

var name = "something";

y = "test";  // NO

// All variables are defined using the "var" keyword.
// If you assign to a variable that doesn't exist yet, then a global variable will automatically be created.
//  This is a side-effect and in general is not desired.  We probably won't do anything with this.

// variable types
// integer
var x = 1;
// decimal/float
var x = 1.6;
// string
var y = "one";
y ='Steve said "No, don\'t throw that volleyball at me!"""""""""""';
// boolean
var z = true;
// array
var ar = [];  // use this one
var ar = new Array();  // older and a bit more clumsy
// object
var obj = { name : "Dave", dog: "some dog", cat: "Mr. Meow" };  // use this one
var obj = new Object()
  obj.name = "Dave";


// Objects are dynamic.  You can just invent new properties for them:
obj.favoriteDog = "Molly the Dog";

// Here is a simple object with two properties:
var balloon = {
  color: "red",
  isPopped: false
};



// Functions
/*
  Functions are discrete chunks of code that perform tasks for you.
  You can use them to calculate math functions,
    modify your variables
    or just let you know when your toast is ready
*/
var myToast = {
    smell: "burnt"
  };
// Function expression (the usual way):
var toastCheck = function(myToast){

  if (myToast && myToast.smell == "burnt")
  {
    return true;
  }
  else
  {
    return false;
  }
}

// Function declaration (alternate way)
function toastCheck(myToast){
  if (myToast.smell == "burnt")
  {
    return true;
  }
  else
  {
    return false;
  }
}

console.log(toastCheck(myToast));


// constructor fn
function Dude(name, job)
{
  this.Name = name;
  this.Job = job;

  this.SayMyName = function(){
    alert("My name is " + this.Name + " and my job is " + this.Job);
  }
}

SayMyName();  // won't work

var someDude = new Dude("Mario", "Plumber");
someDude.sayMyName();


//  Just stick with function expressions for now!

// Getting stuff done with Logic:
// if statements
  var thereAreDoughnuts = "no!";

  if (thereAreDoughnuts == "yeah!")
  {
    goNuts();
  }

// things that mean "false" :  0, false, null, undefined
// EVERYTHING ELSE means "true"

  var doughnuts;

  if (doughnuts)
  {
    goNuts();
  }

//  this means that we can test if something has been assigned to via the "if" statement.

// if  / else  / if else if

  //var doughnuts = ["glazed", "glazed", "chocolate"];

  if (doughnuts && doughnuts.length > 0)
  {
    eatADoughnut(doughnuts);
  }
  else if (doughnuts)
  {
    sulk();
  }
  else
  {
    alert("I don't even know what a doughnut IS!");
  }

// Loops
/*
  Loops involve repeating a series of steps until a condition is met.
*/
x = 10;
while(x > 8)
{
  alert("still counting down");
  x--;
}


for(y = 0; y < 5; y++)
{
  alert("still counting up");
}


// Loops are especially useful for messing around with arrays.

  var nums = [11,5,6,8.2,10];

  // indices start at 0

  console.log(nums[0]) // => 1
  console.log(nums.length) // => 5
  console.log(nums[nums.length - 1]) // 10

  for(var i = 0; i < nums.length; i++) {
    console.log(nums[i]);
  }

  // array of objects

  var balloons = [
    {
      color: "red",
      isPopped: false
    },
    {
      color: "blue",
      isPopped: false
    },
    {
      color: "green",
      isPopped: true
    },
    {
      color: "yellow",
      isPopped: false
    },
    {
      color: "orange",
      isPopped: true
    },
    {
      color: "purple",
      isPopped: false
    }
  ];
  var printBalloons = function() {
    for(var i = 0; i < balloons.length; i++) {
      console.log("color: " + balloons[i].color);
      if(balloons[i].isPopped === true) {
        console.log("popped: yes\n")
      } else {
        console.log("popped: no\n")
      }
    }
  }

  printBalloons(balloons);
