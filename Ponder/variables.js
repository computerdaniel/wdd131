// Declare a variable
let age = 22;

console.log(age);

age = 22;

// A constant variable
const name = "Daniel Scheibmeir";

const policyDisclaimer = "Just because you give us money, doesn't mean" +
   " we have to give it back to you";
   //read only
const username = "dantheman";

// Scope = where you can reference a variable by name

if(age == 22){
    // a new scope
    console.log(username);
}

document.querySelector("h1").style.color = "Blue";