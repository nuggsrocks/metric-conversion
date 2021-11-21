const convert = require('../convert')

describe('convert', () => {
  it.each([
    'gal',
    'L',
    'mi',
    'km',
    'lbs',
    'kg'
  ])('should handle valid unit: %s', (unit) => {
    function f () {
      convert(unit)
    }
    expect(f).not.toThrow()
  })

  it.each([
    'm',
    'miles',
    'meters'
  ])('should throw error on invalid unit input: %s', (unit) => {
    function f () {
      convert(unit)
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
      convert(input)
    }
    expect(f).not.toThrow()
  })

  it.each([
    { type: 'double fraction', inputs: '3/2/3lbs' },
    { type: 'double decimal', input: '4.5.6mi' }
  ])('should throw error on $type input', ({ input }) => {
    function f () {
      convert(input)
    }
    expect(f).toThrow()
  })
})
