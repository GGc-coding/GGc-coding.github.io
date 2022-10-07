function logicalTask1() {
// || or operator
let hour = 12;
let isweekend = true;
if(hour < 10 || hour > 18 || isweekend){
  alert("The office is closed.");
}
}
function logicalTask2() {
  // && AND operator 
  let hour = 12;
  let minute = 30;
  if(hour == 12 && minute == 30){
    alert("The time is 12:30")
  }
  
}

function logicalTask3() {
  // NOT operator
  alert(!true);
  alert(!!"null");
}

function logicalTask4() {
  //or'ed alert
  alert(alert(1) || 2 || alert(3));
}

function logicalTask5() {
  //OR AND OR
  alert(null || 2 && 3 || 4);
}

function logicalTask6() {
  //Check The Login
  let userName = prompt("Who's there?");
  console.log("userName", userName)
  if (userName === "Admin") {
    let password = prompt("Enter Password");
    if (password === "TheMaster"){
      alert("Welcome!");
    }
    else if (password === "" || password === null){
      alert("Cancelled");
    }
    else{
      alert("Wrong Password");
    }
  }
  else if(userName === "" || userName === null){
    alert("Cancelled");
  }
  else{
    alert("I don't know you");
  }
}

function logicalTask7() {
  //OR AND OR
  let week = prompt("Enter the day?");
  if(week === "Saturday" || week ==="Sunday"){
    alert("Happy Weekend");
  }
  else if(week === "Friday"){
    alert("Weekend is coming!");
  }
  else if(week === "Monday"){
    alert("Happy Monday!");
  }
  else if(week === "Tuesday" || week === "Wednesday" || week === "Thursday"){
    alert("Happy Working");
  }
  else{
    alert("Please Enter Valid Day");
  }
}

function logicalTask8() {
  //nullish coalescing operator
  let firstName = null;
  let lastName = null;
  let nickName = "John";
  alert(firstName ?? lastName ?? nickName ?? "Anonymous");
}

function logicalTask9() {
  //Comparision with || operator with ?? ooperator
  let height =  0;
  alert(height || 100);
  alert(height ?? 100);
}

function logicalTask10() {
  //Precedence
  let height = null;
  let width = null;
  let area = (height ?? 100) * (width ?? 50);
  alert(area);
}