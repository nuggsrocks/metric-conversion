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

  const decimalMatch = value.match(decimalRegex)
  let extraDecimal = false

  if (decimalMatch !== null && decimalMatch.length > 1) {
    extraDecimal = true
  }

  const fractionMatch = value.match(fractionRegex)
  let extraFraction = false

  if (fractionMatch !== null && fractionMatch.length > 1) {
    extraFraction = true
  }

  if (extraFraction) {
    throw new Error('Invalid value')
  }

  if (extraDecimal) {
    const decimalFractionRegex = /\..\/.\./g

    const isValid = decimalFractionRegex.test(value)

    if (fractionMatch === null || !isValid) {
      throw new Error('Invalid value')
    }

  }

  if (!units.includes(unit.toLowerCase())) {
    throw new Error('Invalid unit')
  }

  console.log(value, unit)
}
