/*
let js = 'amazing'
console.log(40 + 8 + 23 - 10)

console.log("Jonas");
console.log(23);

let firstName = 'Jonas'

console.log(firstName)

// Variable name conventions
let jonasAndMatilda = 'JM'
let $function = 27;

let person = 'jonas'
let PI = 3.1415;

let myFirstJob = "Programmer"
let myCurrentJob = 'Teacher'

console.log(myFirstJob)

//

let javaScriptIsFun = true
console.log(javaScriptIsFun)

console.log(typeof true)
console.log(typeof javaScriptIsFun)
console.log(typeof 23)
console.log(typeof 'Jonas')

javaScriptIsFun = 'Yes!'
console.log(typeof javaScriptIsFun)

let year
console.log(year)
console.log(typeof year)

year = 1991
console.log(year)
console.log(typeof year)

console.log(typeof null)

//

let age = 30
age = 31

const birthYear = 1991
//birthYear = 1990
//const job

var job = 'programmer'
job = 'teacher'

lastName = "Jimmy"
console.log(lastName)

//

// Math Operators
const now = 2037
const ageJonas = now - 1991
const ageSarah = now - 2018
console.log(ageJonas, ageSarah)

console.log(ageJonas * 2, ageJonas / 2, 2 ** 3)
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Joans'
const lastName = 'Schmedtmann'
console.log(firstName + ' ' + lastName)

// Assignment Operators
let x = 10 + 5   // 15
x += 10          // x = x + 10 = 25
x *= 4           // x = x * 4 = 100
x++              // x = x + 1 = 101
x--              // x = x - 1 = 100
console.log(x)

// Comparison operators
console.log(ageJonas > ageSarah) // >, <, >=, <=
console.log(ageSarah >= 18)

const isFullAge = ageSarah >= 18

console.log(now - 1991 > now - 2019)

//

const now = 2037
const ageJonas = now - 1991
const ageSarah = now - 2018

console.log(now - 1991 > now - 2018)

// console.log( 25 - 10 - 5)

x = y = 25 - 10 - 5 // x = y = 10, x = 10 
console.log(x, y)

const averageAge = (ageJonas + ageSarah) / 2
console.log(averageAge)

//

const firstName = 'Jonas'
const job = 'teacher'
const birthYear = 1991
let currentYear = 2037

const jonas = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' years old ' + job + '!'

console.log(jonas)

const jonasNew = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}!`

console.log(jonasNew)

console.log(`Just a regular string...`)

console.log('String with \n\
multiple \n\
lines.')

console.log(`String with
multiple
lines.`)

//

let age = 15

if (age >= 18) {
    console.log(`Sarah can start her driving license course.`)
} else {
    let yearsLeft = 18 - age
    console.log(`Sarah is too young. Wait another ${yearsLeft} years.`)
}

const birthYear = 1991
let century

if (birthYear <= 1999) {
    century = 20
    console.log(`You are born in the 20th century!`)
} else {
    century = 21
    console.log(`You are born in the 21st century!`)
}

console.log(century)

//

// type conversion
const inputYear = `1991`
console.log(Number(inputYear), inputYear)
console.log(Number(inputYear) + 18)

console.log(Number('Jonas'))
console.log(typeof NaN)

console.log(String(23), 23)

// type coercion
console.log('I am ' + 23 + ' years old.')
console.log('I am ' + '23' + ' years old.')
console.log('23' - '10' - 3)
console.log('23' + '10' + 3)
console.log('23' * '2')

let n = '1' + 1 // 11
n = n - 1       // 10
console.log(n)

//

// 5 falsy values: 0, '', undefined, null, NaN, false

console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('Jonas'))
console.log(Boolean({}))
console.log(Boolean(NaN))
console.log(Boolean(''))

const money = 0

if(money) {
    console.log(`Don't spend it all.`)
} else {
    console.log(`You should get a job!`)
}

let height; 
if(height) {
    console.log(`Height is DEFINED.`)
} else {
    console.log(`Height is UNDEFINED.`)
}

//

let age = '18'

if (age === 18) console.log(`You just became an adult! (strict)`) 

if (age == 18) console.log(`You just became an adult! (loose)`) 

const favouriteNumber = Number(prompt("What's your favourite number?"))

console.log(favouriteNumber);
console.log(typeof favouriteNumber);


// Equal Operator
if (favouriteNumber === 23) {
    console.log(`Cool! 23 is an amazing number!`);
} else if(favouriteNumber === 7) {
    console.log(`7 is also a cool number!`);
} else if (favouriteNumber === 9) {
    console.log(`0 is also a cool number!`);
} else {
    console.log(`Number is no 23 or 7`);
}

// Different Operator
if (favouriteNumber !== 23) {
    console.log('Why not 23?')
}

//

const hasDriverLicense = true // A
const hasGoodVision = true // B

// AND OPERATOR
console.log(hasDriverLicense && hasGoodVision);
// OR OPERATOR
console.log(hasDriverLicense || hasGoodVision);
// NOT OPERATOR
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision

// if (shouldDrive) {
//     console.log(`Sarah is able to drive!`);
// } else {
//     console.log(`Someone else should drive.`);
// }

const isTired = false // C

console.log(hasDriverLicense && hasGoodVision && isTired);

if(hasDriverLicense && hasGoodVision && !isTired){
    console.log(`Sarah is able to drive!`);
} else {
    console.log(`Someone else should drive.`);
}
*/
//

