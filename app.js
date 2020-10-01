// Include the needed modules
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const targetItems = require('./custom/target-items.json')
const generateTrashtalk = require('./custom/generate-trashtalk.js')

// Define server related variables
const app = express()
const port = 3000

// Set the template engine
app.engine('hbs', exphbs({
  layoutsDir: 'views/layouts',
  defaultLayout: 'layout',
  extname: '.hbs',
  // Handlebars helper
  helpers: {
    ifEquals: function (arg1, arg2, options) {
      return (arg1 === arg2) ? options.fn(this) : options.inverse(this)
    }
  }
}))
app.set('view engine', 'hbs')

// All routings
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

// GET routing
app.get('/', (req, res) => {
  res.render('index', { targetItems })
})

// POST routing
app.post('/', (req, res) => {
  const target = req.body.target
  const result = target ? generateTrashtalk(target) : ''
  res.render('index', { targetItems, target, noTarget: !target, result })
})

// Start and listen to the server
app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`)
})