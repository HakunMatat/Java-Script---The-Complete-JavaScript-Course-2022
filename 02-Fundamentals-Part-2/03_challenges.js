'use strict'

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

console.log(`The average score of the dolphins is : ${calcAverageDolphins}.`);
console.log(`The average score of the Koalas is : ${calcAverageKoalas}.`);

function checkWinner(avgDolphins, avgKoalas) {

    const calcAverageKaoalas = avgKoalas
    const calcAverageDolphins = avgDolphins

    if (avgDolphins > 2 * avgKoalas) {
       return console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
    } else if (avgKoalas > 2 * avgDolphins) {
       return console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
    } else if (avgKoalas === avgDolphins) {
       return console.log('The match is draw!')
    } else {
        return console.log('No one wins the match!')
    }
}

checkWinner(calcAverageDolphins, calcAverageKoalas)