const verifyInput = require('../verifyInput')

describe('verifyInput', () => {
  it.each([
    'gal',
    'L',
    'mi',
    'km',
    'lbs',
    'kg'
  ])('should handle valid unit: %s', (unit) => {
    function f () {
      verifyInput(unit)
    }
    expect(f).not.toThrow()
  })

  it.each([
    'm',
    'miles',
    'meters'
  ])('should throw error on invalid unit input: %s', (unit) => {
    function f () {
      verifyInput(unit)
    }
    expect(f).toThrow()
  })

  it.each([
    { type: 'integer', input: '40lbs' },
    { type: 'decimal', input: '9.99lbs' },
    { type: 'fraction', input: '5/10lbs' },
    { type: 'fraction/decimal', input: '0.2/0.5lbs' }
  ])('should handle $type input', ({ input }) => {
    function f () {
      verifyInput(input)
    }
    expect(f).not.toThrow()
  })

  it.each([
    { type: 'double fraction', inputs: '3/2/3lbs' },
    { type: 'double decimal', input: '4.5.6mi' }
  ])('should throw error on $type input', ({ input }) => {
    function f () {
      verifyInput(input)
    }
    expect(f).toThrow()
  })

  it.each([
    { value: '3', unit: 'gal' },
    { value: '7.56', unit: 'l' },
    { value: '1', unit: 'mi' },
    { value: '45', unit: 'km' },
    { value: '16', unit: 'lbs' },
    { value: '4/5', unit: 'kg' }
  ])('should return object with correct value and unit', ({ value, unit }) => {
    expect(verifyInput(value + unit)).toEqual({ value, unit })
  })
})
