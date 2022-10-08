// Remember, we're gonna use strict mode in all scripts now!
'use strict'

/*
const x = '123'

console.log(x)
console.log()
console.log()
*/
//

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX THE BUG
    // value: Number(prompt('Dregrees celsius:')),
    value: 10,
  }

  // B) FIND THE BUG
  console.table(measurement)

  //   console.warn(measureKelvin.value)
  //   console.error(measureKelvin.value)

  const kelvin = measurement.value + 273
  return kelvin
}

// // A) IDENTIFY THE BUG
console.log(measureKelvin())

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2)
  console.log(temps)

  let max = 0
  let min = 0

  for (let i = 0; i < temps.lenght; i++) {
    const curTemp = temps[i]
    if (typeof curTemp !== 'number') continue
    if (curTemp > max) max = curTemp
    if (curTemp < min) min = curTemp
  }
  console.log(max, min)
  return max - min
}

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5])

console.log(amplitudeBug)
