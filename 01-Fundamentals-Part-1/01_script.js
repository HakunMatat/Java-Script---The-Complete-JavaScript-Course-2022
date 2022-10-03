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
*/
//

const firstName = 'Jonas'
const job = 'teacher'
const birthYear = 1991
let currentYear = 2037

const jonas = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' years old ' + job + '!'

console.log(jonas)

const jonasNew = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}!`

console.log(jonasNew)