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
    value: Number(prompt('Dregrees celsius:')),
  }

  // B) FIND THE BUG
  console.table(measurement)

  //   console.warn(measureKelvin.value)
  //   console.error(measureKelvin.value)

  const kelvin = measurement.value + 273
  return kelvin
}

// A) IDENTIFY THE BUG
console.log(measureKelvin())
