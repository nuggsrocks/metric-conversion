const numberRegex = /\d/g
const decimalRegex = /\./g
const fractionRegex = /\//g

const units = [
  'gal',
  'l',
  'mi',
  'km',
  'lbs',
  'kg'
]

module.exports = function (input) {
  let splitIndex
  while (numberRegex.test(input)) {
    splitIndex = numberRegex.lastIndex
  }

  let value, unit

  if (splitIndex === undefined) {
    value = '1'
    unit = input
  } else {
    value = input.substring(0, splitIndex)
    unit = input.substring(splitIndex)
  }

  if ((value.match(decimalRegex) !== null && value.match(decimalRegex).length > 1) ||
    (value.match(fractionRegex) !== null && value.match(fractionRegex).length > 1)) {
    throw new Error('Invalid value')
  }

  if (!units.includes(unit.toLowerCase())) {
    throw new Error('Invalid unit')
  }

  console.log(value, unit)
}
