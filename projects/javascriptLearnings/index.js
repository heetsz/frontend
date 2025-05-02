// console.log(`Hello`);

// // Append numbers 0 to 9 to the <title>
// for (var i = 0; i < 10; i++) {
//   const title = document.getElementById("title");
//   title.textContent = (title.textContent || "") + i;
// }

// // Initialize the name variable
// let name = "You are ";

// // Select buttons by their IDs
// const b1 = document.getElementById("b1");

// // Add 'c' to the name and update the <h1>
// b1.addEventListener("click", () => {
//   name += "Hacked ☠️";
//   document.getElementById("myid").textContent = name;
// });

// let email;
// email = window.prompt("Whats ur emial : ");
// document.getElementById("m2").textContent = email;

let username;

document.getElementById("submit").onclick = function () {
  username = document.getElementById("username").value;
  username = username.charAt(0).toUpperCase() + username.slice(1);
  for (let i = 0; i < username.length - 1; i++) {
    if (username.charAt(i) === ' ' && username.charAt(i + 1) !== ' ') {
      username = username.slice(0, i + 1) + username.charAt(i + 1).toUpperCase() + username.slice(i + 2);
    }
  }
  document.getElementById("para").value = username;
  document.getElementById("title").textContent = document.getElementById("para").value;
}

//"123" == 123   true 
//"123" !== 123  true (check datatype)


let real = Math.floor(Math.random()*10) + 1;
console.log(real);

let count = 0;
document.getElementById("check").onclick = () => {
  count+=1;
  let guess = document.getElementById("mynum").value;
  document.getElementById("check").innerText = "Check";
  if(real < guess && document.getElementById("mynum").value != ""){
    document.getElementById("myh").textContent = `${count}.) Guess a smaller number than ${guess}!!`;
    // while(guess!=real){
    //   guess-=1;
    //   document.getElementById("myh").textContent = `${count}.) Guess a smaller number than ${guess}!!`;
    //   document.getElementById("mynum").value = guess;
    //   document.getElementById("check").click();
    // }
    document.getElementById("mynum").value = ""
  }else if(real > guess  && document.getElementById("mynum").value != ""){
    document.getElementById("myh").textContent = `${count}.) Guess a larger number than ${guess}!!`;
    document.getElementById("mynum").value = ""
  }
  else if(document.getElementById("mynum").value == ""){
    document.getElementById("myh").textContent = "Enter a number"
  }else{
    document.getElementById("myh").textContent = `Wohoo 🎉🎉 the number was ${real}, you got it in ${count} tries`;
    document.getElementById("mynum").value = ""
    guess = document.getElementById("mynum").value;
    count = 0;
    real = Math.floor(Math.random()*10) + 1
    document.getElementById("check").innerText = "Restart";
    console.log(real);
  }
}

document.getElementById("mynum").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.getElementById("check").click();
  }
})

// CALLBACKS
// hello(goodbye)

// function hello(callback){
//   console.log("hello!!");
//   callback();
// }

// function goodbye(){
//   console.log("Goodbye");
// }

// forEach
// map - same as forEach but returns an new array

//reduce (argument, element)
//filter(condition)

//function expressions


function hello(){
  console.log("hello");
}

const hello2 = function(){
  console.log("Hello Again!!");
}

hello();
hello2();

// setTimeout(function(){  //giving function as argument
//   console.log("Nice!!")
// },3000);

const hello3 = () =>{
  console.log("hello again again")
}

hello3();


const person = {
  fname : "heet",
  sname : "shah",
  age:30,
  sayhello: ()=>{
    console.log("hoop");
  } 
}

person.sayhello();

function car(model, color, year){
  this.model = model;
  this.color = color;
  this.year = year;
}

const c1 = new car("G63", "Turquoise", 2024);
console.log(c1.color);

//CLASSES

class Product{
  constructor(name, price){
    this.name = name;
    this.price = price;
  }

  displayProduct(){
    console.log(`Product: ${this.name}`);
  }
}

const p1 = new Product("soap", 199)
p1.displayProduct();


//Static = keyword that defines properties or methods that belong to a "class" itself rather than objects created of the same class

//Class owns anything that is static
//how to access static => console.log(classname.staticvariable);
//no need to create object!!

//DESTRUCTURING

let a = 1;
let b = 2;
[a, b] = [b, a]; //swap

const colors = ["red" , "green", "blue", "yellow", "brown"]; //colors assigned to new const
const [colr1, colr2, colr3, ...extra] = colors;


const db = document.getElementById("db");
let flag = true;

db.addEventListener("mouseover", (event) =>{
  if(flag){
    let x = Math.random() * window.innerHeight  + "px";
    let y = Math.random() * window.innerWidth + "px";
    db.style.top = x;
    db.style.left = y;
    db.innerText = `Ha Ha 🤣🤣`
    db.style.position = "absolute";
    
  }
})

db.addEventListener("click", (event) => {
  db.style.backgroundColor = 'lightGreen';
  db.style.border = 'solid';
  db.style.borderColor = "green";
  db.innerText = `Ouch ☹️, You Won`;
  flag = false;
  
});
