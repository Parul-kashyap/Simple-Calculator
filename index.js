console.log("connected");

// INPUT NUMBERS
let input = document.getElementById("screen");

// BUTTONS
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");
let dot = document.getElementById("dot");

// FUNCTIONS operators
let division = document.getElementById("divide");
let multiplication = document.getElementById("multiply");
let subtraction = document.getElementById("subtract");
let addition = document.getElementById("add");

// BACKSPACE EQUAL CLEAR
let backSpace = document.getElementById("backspace");
let clear = document.getElementById("clean");
let equal = document.getElementById("pass");

// ADDING LISTENER what happens after clicking
one.addEventListener("click",function(){
  input.value += "1";
});
two.addEventListener("click",function(){
  input.value += "2";
});
three.addEventListener("click",function(){
  input.value += "3";
});
four.addEventListener("click",function(){
  input.value += "4";
});
five.addEventListener("click",function(){
  input.value += "5";
});
six.addEventListener("click",function(){
  input.value += "6";
});
seven.addEventListener("click",function(){
  input.value += "7";
});
eight.addEventListener("click",function(){
  input.value += "8";
});
nine.addEventListener("click",function(){
  input.value += "9";
});
zero.addEventListener("click",function(){
  input.value += "0";
});
dot.addEventListener("click",function(){
  input.value += ".";
});

// ADDING LISTENER TO FUNCTIONS

division.addEventListener("click",function(){
  input.value += "/";
});
multiplication.addEventListener("click",function(){
  input.value += "*";
});
subtraction.addEventListener("click",function(){
  input.value += "-";
});
addition.addEventListener("click",function(){
  input.value += "+";
});


// REAL CALCULATION
backSpace.addEventListener("click",function(){
  let a = input.value;
  a = a.substr(0,a.length-1);
  input.value = a;
});

clear.addEventListener("click",function(){
  input.value = "";
});

equal.addEventListener("click",function(){
  let x = input.value;
  let y = eval(x);
  input.value = y;
});
