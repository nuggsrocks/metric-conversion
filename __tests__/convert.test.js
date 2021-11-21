const { units } = require('../constants')
const convert = require('../convert')

describe('convert', () => {
  it.each([
    { value: '3', unit: 'gal', expectedUnit: 'l' },
    { value: '7.56', unit: 'l', expectedUnit: 'gal' },
    { value: '1', unit: 'mi', expectedUnit: 'km' },
    { value: '45', unit: 'km', expectedUnit: 'mi' },
    { value: '16', unit: 'lbs', expectedUnit: 'kg' },
    { value: '4/5', unit: 'kg', expectedUnit: 'lbs' }
  ])('should correctly convert $unit to $expectedUnit', ({ value, unit, expectedUnit }) => {
    const expectedValue = units[unit].conversionRate * Number(value)
    expect(convert(value, unit)).toEqual(expectedValue + expectedUnit)
  })
})
