function conditionalTask1() {
  
  //if a string is a zero
  if("0");
  alert("Hello");
  
}

function conditionalTask2() {
  //multiple ?
  let age = prompt("age?");
  let message  = (age<3) ? "Hello!":
  (age<18) ? "Hey!":
  (age<50) ? "Greetings!":
  "What an unusual age!";
  alert(message)
  
}

function conditionalTask3() {
  //name of javascript
  let begin = prompt("What's the \"official\" name of JavaScript?")
    if (begin == "ECMAScript"){
      alert("Right")
    }
    else{
      alert("You don't know? \"ECMAScript\"!")
    }
  
}

function conditionalTask4() {
  //show the sign
  let value = prompt("Type a number")
    if (value>0){
      alert("1")
    }
    else if (value<0){
      alert("-1")
    }
    else{
      alert("0")
    }
  
}

function conditionalTask5() {
  //Rewrite if into ?
  let a = 1;
  let b = 2;
  let result = (a + b < 4) ? "Below" : "Over";
  alert(result)
}

function conditionalTask6() {
  //Rewrite 'if...else' into "?"
  let message = (login == "Employee") ? "Hello!":
  (login == "Director") ? "Greetings" :
  (login == " ") ? "No Login" : "";
}