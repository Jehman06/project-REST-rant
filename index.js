// Modules and Globals
require('dotenv').config()
let express = require('express')
let app = express()
const methodOverride = require('method-override')
const bodyParser = require('body-parser')

// Express settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({extended: false}))
app.use((req, res, next) => {
    console.log(req.method)
    next()
})

// Controllers & Routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

// Listen for connections
app.listen(process.env.PORT)