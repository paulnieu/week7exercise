var myH1 = document.getElementById("myH1");
  myH1.innerText = "Hello World";
var myNewH1 = document.getElementById('myNewH1');


function getInfo(){
  var userInput = document.getElementById('userInput').value;
  console.log(userInput);
  myNewH1.innerText = userInput;

}

var stringArray = ["this", "is", "a","string", "array"];

for (var i = 0; i < stringArray.length; i++){
  console.log (stringArray[i]);
}

var myObj = {
  name:"Paul",
  age: 29,
  isFemale: false
};

console.log(myObj.name);
console.log(myObj.age);
console.log(myObj.isFemale);

var myHeading1 = document.getElementById('myHeading1');
var myHeading2 = document.getElementById('myHeading2');
var myHeading3 = document.getElementById('myHeading3');

myHeading1.innerText = myObj.name;
myHeading2.innerText = myObj.age;
myHeading3.innerText = myObj.isFemale;

var myArray = [
  {
    name:"Kevin",
    age:28,
    relation:"Cousin"
  },
  {
    name:"Michael",
    age:32,
    relation:"Brother"
  },
  {
    name:"Rena",
    age:28,
    relation:"Ugly Cousin"
  }

];

for(var i = 0; i < myArray.length; i++){
  console.log(myArray[i].name);
  console.log(myArray[i].age);
  console.log(myArray[i].relation);

  document.body.style.color = "red"
}
