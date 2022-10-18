function objTask1() {
  //Hello, object
  let user= {
    name: "John",
    surname: "Smith",
  };
  user.name = "pete";
  alert(delete user.name);
}

function objTask2(obj) {
  //check for emptiness
  for(let key in obj){
    return false;
    return true;
  }
}