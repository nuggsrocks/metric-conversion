const verifyInput = require('./verifyInput')
const convert = require('./convert')

module.exports = function (app) {
  app.route('/convert').get((req, res) => {
    if (!req.query.q) {
      return res.status(400).type('text').send('Invalid request!')
    }

    let value, unit

    try {
      const input = verifyInput(req.query.q)
      value = input.value
      unit = input.unit
    } catch(e) {
      return res.status(400).type('text').send(e.message + '!')
    }

    const result = convert(value, unit)

    res.status(200).type('text').send(result)
  })
}
