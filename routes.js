module.exports = function (app) {
  app.route('/convert').get((req, res) => {
    res.status(200).type('text').send('Convert')
  })
}
