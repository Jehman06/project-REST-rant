
const router = require('express').Router()
const places = require('../models/places.js')

// CREATE ROUTE
router.post('/', (req, res) => {
  if(!req.body.pic) {
    req.body.pic = "https://d.newsweek.com/en/full/1519658/barcito-los-angeles.jpg?w=1600&h=1600&q=88&f=64b0d307cded2a8be3187114f44f175b"
  }
  if(!req.body.city) {
    req.body.city = 'Anytown'
  }
  if(!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

// CREATE NEW
router.get('/new', (req, res) => {
  res.render('places/new')
})

// GET PLACES
router.get('/', (req, res) => {     
    res.render('places/index', {places})
})

module.exports = router