const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const routes = require('./routes')
require('dotenv').config()

const app = express()

app.use(express.static(path.join(__dirname, '/public')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

routes(app)

app.use((req, res, next) => {
  res.status(404).type('text').send('404 Not Found')
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log('listening on port ' + PORT))
