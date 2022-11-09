function objTask1() {
  //Hello, object
  let user= {
    name: "John",
    surname: "Smith",
  };
  user.name = "pete";
  alert(delete user.name);
}

// task 2
function isEmpty(obj) {
  //check for emptiness
  for(let key in obj){
    return false;
  }
  return true;
}

function objTask3() {
  //sum object properties
  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  let sum = 0;
  for(const key in salaries){
    sum = sum + salaries[key];
  }
  alert(sum);
}

function objTask4() {
  //multiply numeric
  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  for(let key in menu){
    if(typeof menu[key] === 'number'){
      menu[key] = menu[key] * 2;
    }
  }
  alert(JSON.stringify(menu))
}