function loopsTask1() {
  // while loops increment
  let i = 0;
  while (i < 3) {
    alert(i);
    i++;
  }
}

function loopsTask2() {
  //while loops decrement
  let i = 5;
  while (i) {
    alert(i--);
  }
}

function loopsTask3() {
// do...while loops 
let i = 0;
do {
  alert(i);
  i++;
} while (i < 2);
}

function loopsTask4() {
  //for loops 
  for(let i = 0; i < 4; i++){
    alert(i);
  }
}

function loopsTask5() {
  //Breaking the loop
  let sum = 0;
  while(true) {
    let value = +prompt("Enter a number");
    if (!value) break;
    sum += value;
  }
  alert("sum:"+ sum);
}

function loopsTask6() {
  //continue to the next iteration
  for(let i = 0; i < 10; i++){
  if(i % 2 === 0) continue;
  alert(i);
  }
}

function loopsTask7() {
  //even numbers
  for(let i = 2; i < 11; i++){
    if(i%2 === 0){
      alert(i)
    }
  }
}

function loopsTask8() {
  //Repeat until the input is correct
  let correct;
  do{
    correct = prompt("Enter the number greater than 100?");
  }while(correct<=100);
}

function loopsTask9() {
  //Output prime numbers
  let input = +prompt("Enter a number?");
  if(input <= 1){
    alert("Not a prime number");
    return;
  }
  for(i = 2; i < input; i++){
    if(input % i === 0){
      alert("Not a prime number");
    }
  }
  alert("Prime Number");
}