'use strict'

/*
let hasDriversLicense = false
const passTest = true

if(passTest) hasDriversLicense = true
if(hasDriversLicense) console.log('I can drive!')

// Reserved words
// const interface = 'Audio'
// const private = 534
// const if = 25

//

// the function
function logger() {
    console.log('My name is Jonas');
}

// calling, running or invoking the function
logger()

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice
}

const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice)

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice)

//

// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear
}

const age1 = calcAge1(1991)
console.log(age1);

// Function Expression
const calcAge2 = function calcAge2(birthYear) {
    return 2037 - birthYear
}

const age2 = calcAge2(1991)
console.log(age1, age2);

//

// Arrow function
const calcAge = birthYear => 2037 - birthYear
const age = calcAge(1991)
console.log(age);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear
    const retirement = 65 - age
    return `${firstName} retires in ${retirement} years.`
}

console.log(yearsUntilRetirement(1998, 'Jonas'))

//

function cutFruitPieces(fruit) {
    return fruit * 4
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples)
    const orangePieces = cutFruitPieces(oranges)

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
    return juice
}

console.log(fruitProcessor(2,3))

//

const calcAge = function(birthYear) {
    return 2037 - birthYear
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 65 - age
    if (retirement > 0) {
        return console.log(`${firstName} retires in ${retirement} years.`)
    } else {
        return console.log(`${firstName} is already retired.`)
    }
    // return retirment
    // return console.log(`${firstName} retires in ${retirement} years.`)
}

yearsUntilRetirement(1991, 'Jonas')
yearsUntilRetirement(1934, 'Jonas')

//

const friend1 = 'Michael'
const friend2 = 'Steven'
const friend3 = 'Peter'

let friends = ['Michael', 'Steven', 'Peter']
console.log(friends)

const years = new Array(1991, 1984, 2008, 2020)

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay'
console.log(friends);

friends = ['Bot', 'Alice']
console.log(friends);

const firstName = 'Jonas'
const lastName = 'Schmedtmann'
const jonas = [firstName, lastName, 2037 - 1991, 'teacher', friends]

console.log(jonas);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear
}

const years = [1990, 1967, 2002, 2010, 2018]

const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3 = calcAge(years[years.length - 1])
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]

console.log(ages);

//

// Add elements
const friends = ['Michael', 'Steven', 'Peter']
const newLenght= friends.push('Jay') // Add an element at the last position
console.log(friends);
console.log(newLenght);

friends.unshift('John') // Add an element at the first position
console.log(friends);

// Remove elements
friends.pop() // Remove the last element of the array
const popped = friends.pop()
console.log(popped);
console.log(friends);

friends.shift() // Remove the first element of the array
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23) // uses ===
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23')); // This is string
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven.');
} else {
    console.log(`You don't have a friend called Steven`);
}

//

const jonasArray = [
    'Jonas',
    'Schmedtman',
    2037 - 1991,
    'teacher'
    ['Michael', 'Peter', 'Steven']
]

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtman',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
}

//

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtman',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
}

console.log(jonas.lastName)
console.log(jonas['lastName']) // We can put any expression(operation).

const nameKey = 'Name'
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

//console.log(jonas.'last' + nameKey);

const interestedIn = prompt('What do you want to know about Jonas? (firstName, lastName, age, job, friends')

const promptAnswer = jonas[interestedIn]

if (promptAnswer === undefined) {
    console.log('There is no such characteristic on the object.');
} else {
    console.log(jonas[interestedIn]);
}

jonas.location = 'Portugal'
jonas['twitter'] = '@jonasschmedtman'
console.log(jonas);

// Challenge
// 'Jonas has 3 friends, and his best friend is called Michael'

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`)

//

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtman',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriverLicense: false,
    // calcAge: function() {
    //     console.log(this);
    //     return 2037 - this.birthYear
    // }
    // calcAge: function(birthYear) {
    //     return 2037 - birthYear
    // }
    calcAge: function() {
        if (this.hasDriverLicense) {
            console.log(`${this.firstName} is a ${2037 - this.birthYear}-years old ${this.job}. And has a driver license.`)
        } else {
            console.log(`${this.firstName} is a ${2037 - this.birthYear}-years old ${this.job}. And doesn't have a driver license.`)
        }
    },
}

// console.log(jonas.calcAge())

// console.log(jonas.age)
// console.log(jonas.age)
// console.log(jonas.age)


// console.log(jonas['calcAge'](1991))

// Challenge
// "Jonas is a 46-years old teacher. And has a driver license."

console.log(jonas.calcAge());

//

// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 1');

// for loop keeps running while condition is true
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`)
}

//

// const JonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', ' Peter', 'Steven'],
// ]

// const types = [];

// for (let i = 0; i < JonasArray.length; i++) {
//     // Reading from JonasArray
//     console.log(JonasArray[i], typeof JonasArray[i]);

//     // Filling types array
//     // types[i] = typeof JonasArray[i]
//     types.push(typeof JonasArray[i])
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020]
// const ages = []
// const currentYear = 2022

// for (let i = 0; i < years.length; i++) {
//     ages.push(currentYear - years[i])
// }

// console.log(ages);

// continue and break

// const JonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', ' Peter', 'Steven'],
//     true
// ]

// console.log('---- ONLY STRING ----');
// for (let i = 0; i < JonasArray.length; i++) {
//     if (typeof JonasArray[i] !== 'string') continue;

//     console.log(JonasArray[i], typeof JonasArray[i]);
// }

// console.log('---- BREAK WITH NUMBER ----');
// for (let i = 0; i < JonasArray.length; i++) {
//     if (typeof JonasArray[i] === 'number') break;

//     console.log(JonasArray[i], typeof JonasArray[i]);
// }
*/
//

const JonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', ' Peter', 'Steven'],
]

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = JonasArray.length - 1; i >= 0; i--) {

}