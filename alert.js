alert("I'm Javascript!")
//working with variables
let admin, name;
name = "john";
admin = name;
alert(admin)
//variable naming
let ourPlanetName= "Earth";
let ourCurrentVisitor= "chinnu";
//prompt function
let nam= prompt("What is your name?", );
alert(`${nam}`);
//prompt function in IE
let test = prompt("Test","");
//confirm function
let isBoss = confirm("Are you the boss?");
alert(isBoss);
//postfix and prefix
let a=1, b=1;
alert(++a);
alert(b++);
alert(a);
alert(b);
//uninary & binary propmt addition
let c = prompt("First number?", 1);
let d = prompt("Second number?", 2);
alert(+c + +d);
//if, elseif, else statement
let year = prompt('In which year was ECMAScript-2015 specification published?', );
if (year<2015) { 
  alert("Too early!");}
else if (year>2015) { 
  alert("To Late..");}
else {
  alert("Exactly");}


