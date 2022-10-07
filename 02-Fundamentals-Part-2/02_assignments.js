'use strict'
/*
//

function describeCountry(country, population, capitalCity) {
    console.log(`${country} has ${population} million people and its capital city is ${capitalCity}.`);
}

describeCountry('Bulgaria', 6.7, 'Sofia')
describeCountry('Cyprus', 1.3, 'Nicosia')
describeCountry('America', 114, 'Washingon D.C')

//

function percentageOfWorld1(population) {
    return (population/7900) * 100
}

const calcPercentage = function percentageOfWorld2(population) {
    return (population/7900) * 100
}

const bulgariaPercentage = percentageOfWorld1(6.7)
const chinaPercentage = percentageOfWorld1(1441)
const cyprusPercentage = percentageOfWorld1(1.1)

console.log(bulgariaPercentage, chinaPercentage, cyprusPercentage);

//

const percentageOfWorld3 = population => (population/7900) * 100

console.log(percentageOfWorld3(1441));

//

function percentageOfWorld(population) {
    return (population/7900) * 100
}

function describePopulation(country, population) {
    return console.log(`${country} has ${population} million people, which is about ${percentageOfWorld(population)}% of the world.`);
}

const chinaDescription = describePopulation('China', 1441)
const bulgariaDescription = describePopulation('Bulgaria', 6.7)
const cyprusDescription = describePopulation('Cyprus', 1.4)

//

let populations = [6.8, 1441, 120, 1.4]

if (populations.length === 4) {
    console.log('The array does have 4 elements')
}   else {
    console.log('The array does not have 4 elements')
}

function percentageOfWorld1(population) {
    return (population/7900) * 100
}

let percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])]

console.log(percentages);

//

let countryNeighbours = ['Macedonia', 'Romania', 'Greece', 'Serbia', 'Turkey']

countryNeighbours[countryNeighbours.length] = 'Utopia'
console.log(countryNeighbours);

countryNeighbours.pop()
console.log(countryNeighbours);

if (!countryNeighbours.includes('Germany')) {
    console.log(`Probably not a central European country.`);
} else {
    console.log(`It is a central European country.`);
}

const index = countryNeighbours.indexOf('Romania')

countryNeighbours.splice(index, index, 'Republic of Romania')

console.log(countryNeighbours);

//

const myCountry = {
    country: 'Bulgaria',
    capital: 'Sofia',
    language: 'Bulgarian',
    population: 6.7,
}

const countryNeighbours = [
    'Macedonia',
    'Romania',
    'Greece',
    'Serbia',
    'Turkey'
]

//

let myCountry = {
    country: 'Bulgaria',
    capital: 'Sofia',
    language: 'bulgarian',
    population: 6.7,
    neighbours: ['Macedonia', 'Romania', 'Greece', 'Serbia', 'Turkey']
}

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

console.log(myCountry.population + 2)

console.log(myCountry['population'] - 2);

//

let myCountry = {
    country: 'Bulgaria',
    capital: 'Sofia',
    language: 'bulgarian',
    population: 6.7,
    neighbours: ['Macedonia', 'Romania', 'Greece', 'Serbia', 'Turkey'],
    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`)
    },
    checkIsIsland: function () {
        this.neighbours.length = 0 ? this.isIsland = true : this.isIsland = false
        return this.isIsland
    },
}

myCountry.describe()
console.log(myCountry.checkIsIsland())
*
//

for (let voters = 1; voters <= 50; voters++) {
    console.log(`Voter number ${voters}, is currently voting.`)
}

//

let populations = [6.8, 1441, 120, 1.4]
let percentages2 = []

for (let i = 0; i < populations.length; i++) {
    percentages2.push(populations[i] / 7900 * 100)
}

console.log(percentages2);
*/
//

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
    'Russia']];

for (let i = 0; i < listOfNeighbours.length; i++) { // i = 0 , i = 1, i = 2
    for (let r = 0; r < listOfNeighbours[i].length; r++) // r = 0, 1, 2
        console.log(`Neighbour: ${listOfNeighbours[i][r]}`);
}

