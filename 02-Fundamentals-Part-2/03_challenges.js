'use strict'
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

//Data 1
// const calcAverageDolphins = calcAverage(44,23,71)
// const calcAverageKoalas = calcAverage(65,54,49)
//Data 2
// const calcAverageDolphins = calcAverage(85,54,41)
// const calcAverageKoalas = calcAverage(23,34,27)
// Data 3
const calcAverageDolphins = calcAverage(15,15,15)
const calcAverageKoalas = calcAverage(15,15,15)

console.log(`The average score of the Dolphins is ${calcAverageDolphins}.`);
console.log(`The average score of the Koalas is ${calcAverageKoalas}.`);

function checkWinner(avgDolphins, avgKoalas) {

 if (avgDolphins >= 2 * avgKoalas) {
       return console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
    } else if (avgKoalas >= 2 * avgDolphins) {
       return console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
    } else if (avgKoalas === avgDolphins) {
       return console.log('The match is draw!')
    } else {
        return console.log('No one wins the match!')
    }
}

checkWinner(calcAverageDolphins, calcAverageKoalas)

//

// Data
const bill = [125, 555, 44]
console.log(bill);
const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])]
console.log(tips);
const total = [calcTotal(bill[0], tips[0]), calcTotal(bill[1], tips[1]), calcTotal(bill[2], tips[2])]
console.log(total);

// console.log(calcTotal(bill[0], tips[0]));

function calcTip(bill) {
   return bill >= 50 && bill <= 300 ? bill * 15/100 : bill * 20/100
}

function calcTotal(bill, tips) {
   return bill + tips
}

//

const mark = {
   firstName: 'Mark',
   lastName: 'Miller',
   mass: 78,
   height: 1.69,
   calcBMI: function () {
      this.bmi = this.mass / this.height ** 2
      return this.bmi
   },
   getSummary: function () {
      if (mark.calcBMI() > john.calcBMI()) {
         console.log(`Mark's BMI (${mark.calcBMI()}) is higher than John's (${john.calcBMI()})`);
      } else {
         console.log(`John's BMI (${john.calcBMI()}) is higher than Marks's (${mark.calcBMI()})`);
      }
   },
}

const john = {
   firstName: 'John',
   lastName: 'Smith',
   mass: 92,
   height: 1.95,
   calcBMI: function () {
      this.bmi = this.mass / this.height ** 2
      return this.bmi
   },
   getSummary: function () {
      if (mark.calcBMI() > john.calcBMI()) {
         console.log(`Mark's BMI (${mark.calcBMI()}) is higher than John's (${john.calcBMI()})!`);
      } else {
         console.log(`John's BMI (${john.calcBMI()}) is higher than Marks's (${mark.calcBMI()})!`);
      }
   },
}

mark.getSummary()
john.getSummary()

//

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let tips = []
let totals = []


function calcTip(bill) {
   return bill >= 50 && bill <= 300 ? bill * 15 / 100 : bill * 20 / 100
}

function calcTotal(bills, tips) {
   return bills + tips
}

for (let i = 0; i < bills.length; i++) {
   tips.push(calcTip(bills[i]))
   totals.push(calcTotal(bills[i], tips[i]))
}

// for (let i = 0; i < bills.length; i++) {
//    totals.push(calcTotal(bills[i], tips[i]))
// }

const calcAverage = function (arr) {
   let sum = 0;
   for (let i = 0; i < arr.length; i++) {
      // sum = sum + arr[i]
      sum += arr[i]
   }
   return sum / arr.length
}

console.log(calcAverage(totals))
// console.log(bills, tips, totals, sum);
*/
//

