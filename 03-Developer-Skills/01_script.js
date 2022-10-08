// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const x = '123'

console.log(x)
console.log()
console.log()

//

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: 10,
//   };
//   console.table(measurement);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// const calcTempAmplitudeBug = (bb, eeb) => {
//   const temps = bb.concat(eeb);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];
//   console.log(max);

//   const tempsLenght = temps.length;

//   for (let i = 0; i < tempsLenght; i++) {
//     let curTemp = temps[i];

//     // if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) {
//       max = curTemp;
//     }
//     if (curTemp < min) {
//       min = curTemp;
//     }
//   }
//   console.log(max, min);
//   return max - min;
// };

//

const calcTempAmplitudeBug = (bb, eeb) => {
  const temps = bb.concat(eeb);

  let max = temps[0];
  let min = temps[0];
  console.log(max);

  for (let i = 0; i < temps.length; i++) {
    let curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(min, max);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1, 'error'], [9, 4, 5]);
console.log(amplitudeBug);
*/
//
