/*
// Data 1
// let massMark = 78
// let heightMark = 1.69
// let massJohn = 92
// let heightJohn = 1.95

// Data 2
let massMark = 95
let heightMark = 1.88
let massJohn = 85
let heightJohn = 1.76

let markBMI = massMark / heightMark ** 2
let johnBMI = massJohn / heightJohn ** 2
console.log(markBMI)
console.log(johnBMI)

let markHigherBMI = markBMI > johnBMI
console.log(markHigherBMI)

//

// Data 1
// let massMark = 78
// let heightMark = 1.69
// let massJohn = 92
// let heightJohn = 1.95

// Data 2
let massMark = 95
let heightMark = 1.88
let massJohn = 85
let heightJohn = 1.76

let markBMI = massMark / heightMark ** 2
let johnBMI = massJohn / heightJohn ** 2
console.log(markBMI)
console.log(johnBMI)

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)
}

//

// Data 1
// let averageDolphins = (96 + 108 + 89) / 3
// let averageKoalas = (88 + 91 + 110) / 3
// Data 2
// let averageDolphins = (97 + 112 + 101) / 3
// let averageKoalas = (109 + 95 + 123) / 3
// Data 3
let averageDolphins = (97 + 112 + 101) / 3
let averageKoalas = (109 + 95 + 106) / 3

let requirementDolphins = (averageDolphins >= 100)
let requirementKoalas = (averageKoalas >= 100)

if (requirementDolphins && (averageDolphins > averageKoalas)) {
    console.log(`Dolphins Win! ${averageDolphins} / ${averageKoalas}`);
} else if (requirementKoalas && (averageKoalas > averageDolphins)) {
    console.log(`Koalas Win! ${averageDolphins} / ${averageKoalas}`);
} else {
    console.log(`Draw! ${averageDolphins} / ${averageKoalas}`);
}

//

//Data 1
const bill = 275
//Data 2
// const bill = 40
//Data 3
// const bill = 430

const tip = bill >= 50 && bill <= 300 ? bill * 15/100 : bill * 20/100

// let tip

// if (bill >= 50 && bill <= 300) {
//     tip = bill * 15/100
// } else {
//     tip = bill * 20/100
// }

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}.`);
*/
//
