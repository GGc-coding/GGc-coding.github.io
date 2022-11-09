function funcTask1() {
  //function declaration
  alert("Hello everyone!");
}

function funcTask2() {
  //local variable
  let message = "Hello, I'm javascript!"
  alert(message);
}

let userName = "john";
function funcTask3(){
  //outer variable
  let msg = "Hello, " +  userName;
  alert(msg);
}

// TODO: Understand how to generate random number
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function funcTask4() {
  let input = +prompt("Guess the number b/w 1 & 100");
  if(input === 0){
    alert("Exited the game!");
    return;
  }
  let ans = randomIntFromInterval(1, 100);
  while(input !== ans){
    if(input < ans){
      alert("Too small");
      input = +prompt("Guess again!");
    }
    else if(input > ans){
      alert("Too big");
      input = +prompt("Guess again!");
    }
  }
  alert("Hurray! You guessed the number!");
}

function funcTask5(question, yes, no) {
  if (confirm(question)) yes();
  else no;
}

function funcTask6() {
  //factorial
  let n = +prompt("Enter a value?");
  let total = 1;
  for(i = n; i >= 1; i--){
    total = total * i;
  }
  alert(total);
}

function funcTask7() {
  //number printing in triangle shape
  let output = "";
  let n = +prompt("Enter a number: ");
  for (i = 1; i <=n; i++){
    for(j = 1; j<=i; j++){
      output = output + j;
    }
    output = output + "\n";
  }
  console.log(output);
}