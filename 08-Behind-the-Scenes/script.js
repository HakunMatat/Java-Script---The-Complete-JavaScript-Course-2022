'use strict';
/*
function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}.`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const firstName = 'Steven';
            const str = `Oh, and you're a millenial ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }

            output = 'NEW OUTPUT!';
        }
        console.log(millenial);
        // add(2, 5);
        console.log(output);
    }
    printAge();
    return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();

//

// Hoisting with Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Hoisting with Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
    return a + b;
}
// underfined is not a function
var addExpr = function (a, b) {
    return a + b;
};
// underfined is not a function
var addArrow = (a, b) => a + b;

// Example

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

//

console.log(this);

const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
    console.log(this);
};

calcAge(1991);

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this);
};

calcAgeArrow(1980);

const Jonas = {
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
    }
};
Jonas.calcAge();

const matilda = {
    year: 2017
};

matilda.calcAge = Jonas.calcAge;
matilda.calcAge();

const f = Jonas.calcAge;
f();
*/

const Jonas = {
    firstName: 'Jones',
    year: 1991,

    // Solution 1:
    // calcAge: function () {
    //     console.log(this);
    //     console.log(2037 - this.year);
    //     const self = this;
    //     const isMillenial = function () {
    //         console.log(self.year >= 1981 && self.year <= 1996);
    //     };
    //     isMillenial();
    // },

    // Solution 2:
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);

        const isMillenial = () => {
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenial();
    },
    greet: () => console.log(`Hey ${this.firstName}`)
};
Jonas.greet();
Jonas.calcAge();

const addExpr = function (a, b) {
    console.log(arguments);
    return a + blur;
};
addExpr(2, 5);

var addArrow = (a, b) => a + b;
