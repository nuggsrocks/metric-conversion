const { units } = require('./constants')

module.exports = function (value, unit) {
  const result = value * units[unit].conversionRate
  return result + units[unit].convertsTo
}
