/*
let js = 'amazing';
// console.log(js);
// if (js === 'amazing') alert('JS is Fun!!!');
console.log(40 + 5 + 44 - 1);

console.log('Igor');
console.log(23);

let firsName = 'Jonas';
console.log(firsName);
console.log(firsName);
console.log(firsName);
console.log(firsName);
*/

/*
LECTURE: Values and Variables
1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)
2. Log their values to the console

*/


// const country = 'Belarus';
// const continent = 'Europa';
// let population = 3000000;

// console.log(`country - ${country}, continent- ${continent}, population - ${population}`);

//Date type

//7 data type -Nnumber, String, Boolean, Undefined, Null, Symbol(ES), BigInt (ES2020)

/*let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'John');

javascriptIsFun = 'YES';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

// let age = 38;
// age = 31;

// const birthYear = 1991;
// const job;

// var job = 'programmer';
// job = 'teacher';

// Math operators

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2019;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);


//Assigment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4
x++; // x = x + 1
x--;
x--;

console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, < , >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 10;


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2019;

console.log(now - 1991 > now - 2020);
*/


/*
LECTURE: Data Types
1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console
*/
// const isIsland = false;
// let language;

// console.log(typeof isIsland, population, country, language);


/*
LECTURE: let, const and var
1. Set the value of 'language' to the language spoken where you live (some
countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never
change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens
*/

// language = 'by';


/*
### Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK �
*/
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const bmiMaks = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;

const markHigherBMI = bmiMaks > bmiJohn;

console.log(bmiJohn, bmiMaks);
console.log(markHigherBMI);
*/
/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;
*/
//const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// const jonas = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;

// console.log(jonas);

// const jonasNew = `I'm ${firstName}`;
// console.log(jonasNew);

// console.log('String with \n\
// miltiple \n\
// lines');

// console.log(`String with
// miltiple
// lines`);

/*
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarh is too young. Wait anoger ${yearsLeft} years :) 😕`);
}

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);
*/

/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
GOOD LUCK �
*/
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const bmiMaks = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;

const markHigherBMI = bmiMaks > bmiJohn;

console.log(bmiJohn, bmiMaks);
console.log(markHigherBMI);

if (bmiJohn > bmiMaks) {
    console.log(`John's ${bmiJohn} BMI is higher than Mark's ${bmiMaks} BMI!`);
} else {
    console.log(`Mark's ${bmiMaks} BMI is higher than John's ${bmiJohn} BMI!`);
}
*/

// console.log(String(33), 33);
