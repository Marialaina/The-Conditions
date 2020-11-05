/*
let / const
let allows reassignment
const is 'constant' never changing
deafult to const 
*/

const age  = 15;
const name = "Adrian";

// if expression is true then {}
if (age > 10 && age < 50){
    console.log('you can get on the ride')
} else if (age > 10 && !(age > 10)) {
    console.log(`you're too old... sorry`);
} else if (age < 50 && !(age >10)) {
    console.log(`you're too young, you can't get on... sorry`);
} else {
    console.log(`sorry you can't get on!`);
}

if (name === 'Adrian') {
    console.log('Hey, Adrian');
} else {
    console.log(`Hi what's you're name?`);
}

//ternary

const allowedIn = age > 21 ? true : false;
console.log(allowedIn);