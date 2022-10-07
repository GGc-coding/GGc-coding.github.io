function switchTask1() {
  //switch example
  let a = 2 + 2;
  switch (a) {
    case 3:
      alert("Too small");
      break;
    case 4:
      alert("Exactly");
      break;
    case 5:
      alert("Too big");
      break;
    default:
      alert("I don't know such values");
      
  }
}

function switchTask2() {
  //switch without break
  let a = 2 + 2;
  switch (a) {
    case 3:
      alert("Too small");
      break;
    case 4:
      alert("Exactly");
    case 5:
      alert("Too big");
      break;
    default:
      alert("I don't know such values");
  }
}

function switchTask3() {
  //case grouping
  let a = 3;
  switch (a) {
    case 4:
      alert("Right");
      break;
    case 3:
    case 5:
      alert("Wrong");
      alert("Why don't you take a math class?")
      break;
    default:
      alert("The result is strange, Really.");
  }
}

function switchTask4() {
  let arg = prompt("Enter a value?");
  switch (arg) {
    case "0":
    case "1":
      alert("Zero or One");
      break;
    case "2":
      alert("Two");
      break;
    case 3:
      alert("Never exceutes!");
      break;
    default:
      alert("An unknown value!")
  }
}