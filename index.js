/*
let / const
let allows reassignment
const is 'constant' never changing
deafult to const 
*/

// const age  = 15;
// const name = "Adrian";

// if expression is true then {}
// if (age > 10 && age < 50){
//     console.log('you can get on the ride')
// } else if (age > 10 && !(age > 10)) {
//     console.log(`you're too old... sorry`);
// } else if (age < 50 && !(age >10)) {
//     console.log(`you're too young, you can't get on... sorry`);
// } else {
//     console.log(`sorry you can't get on!`);
// }

// if (name === 'Adrian') {
//     console.log('Hey, Adrian');
// } else {
//     console.log(`Hi what's you're name?`);
// }

//ternary

// const allowedIn = age > 21 ? true : false;
// const response = name === 'gabe' ? 'how are you?' : 'are you hungry?'
// console.log(allowedIn);

//and -> &&
//or -> //
// Not !

// const bankUser = 'Gates';
// const balance = 50;

// if (bankUser === 'Gates' || balance > 50){
//     console.log(`You've been approved for a loan!`);
// } else {
//     console.log(`You're better off without the loan... to be honest`);
// }

// short circuit logic / evaluation

// const name = bankUser === 'Gates' && 'Bill';
// const userName = userInput && userInput.name;

// if (age > 10 && age < 50){
//     console.log('you can get on the ride')
// } else if (age > 10 && !(age > 10)) {
//     console.log(`you're too old... sorry`);
// } else if (age < 50 && !(age >10)) {
//     console.log(`you're too young, you can't get on... sorry`);
// } else {
//     console.log(`sorry you can't get on!`);
// }

// if (name === 'Adrian') {
//     console.log('Hey, Adrian');
// } else {
//     console.log(`Hi what's you're name?`);
// }

///Not FINISHED
// const age = 25;

// if (age > 16 ){
//     console.log(`You can't do much outside of school`);
// } else if (age => 16 ) {
//     age16 = `You can drive`
//     console.log(age16);
// } else if (age => 21 ) {
//     age21 = `You can drink alcohol`;
//     console.log(age21);
// } else if (age => )

///Switch STATEMENT

// const food = "apple";

// switch(food) {
//     case `pear`:
//         console.log('I love pears');
//     case `apple`:
//         console.log('I love apples');

//     default: 
//     console.log('What???');
// }

// const users = [`gabe`, `adrian`, `mari`, `dom`];

// for( let i = 0; i< 5; i += 2) {
//     console.log(i);
// }

// const nums = [1, 2, 3,4 ,5 ];
// for (let i = 0; i < nums.length; i++){
//     nums[i] = nums[i] * 2;
// }
// console.log(nums);

// const students = [
//     'gabe',
//     'adrian',
//     'dom',
// ];

// for (let i = 0; i< students.length; i++){
//     if (students[i] === 'Casey' || students[i] === 'Mary'){
//         console.log(students[i]);
//     }
// }

// for(let i = 0; i < 100; i++ ){
//     if (!(i % 2 === 0)){
//         console.log('ODD', i);
//     }
// }



// for (let i = 1; i <= 100; i++){
//     if (i % 3 === 0){
//         console.log(`fizz`);
//     }
//     else {
//         console.log(i);
//     }
// }

for (let i = 1; i <= 100; i++){
    if ( i % 3 === 0 && i % 5 === 0){
        console.log(`fizz buzz`);
    }
    else if ( i % 5 === 0){
        console.log(`buzz`)
    }
    else if ( i % 3 === 0 ){
        console.log(`fizz`);
    }
    else {
        console.log(i);
    }
}


