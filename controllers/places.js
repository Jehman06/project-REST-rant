
const router = require('express').Router()
const places = require('../models/places.js')

// INDEX
router.get('/', (req, res) => {     
  res.render('places/index', {places})
})

// CREATE ROUTE
router.post('/', (req, res) => {
  if (!req.body.pic) {
    req.body.pic = "https://d.newsweek.com/en/full/1519658/barcito-los-angeles.jpg?w=1600&h=1600&q=88&f=64b0d307cded2a8be3187114f44f175b"
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  if (!req.body.foundedYear) {
    req.body.foundedYear = 'N/A'
  }
  places.push(req.body)
  res.redirect('/places')
})

// CREATE NEW
router.get('/new', (req, res) => {
  res.render('places/new')
})

// SHOW ROUTE
router.get('/:id', (req,res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  } 
  else if (!places[id]) {
    res.render('error404')
  } 
  else {
    res.render('places/show', {place: places[id], id})
  }
})

// EDIT ROUTE
router.put('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) { 
    res.render('error404')
  }
  else if (!places[id]) {  
    res.render('error404')
  }
  else {
      // Dig into req.body and make sure data is valid
      if (!req.body.pic) {
          // Default image if one is not provided
          req.body.pic = 'https://d.newsweek.com/en/full/1519658/barcito-los-angeles.jpg?w=1600&h=1600&q=88&f=64b0d307cded2a8be3187114f44f175b'
      }
      // Default town if one is not provided
      if (!req.body.city) {
          req.body.city = 'Anytown'
      }
      // Default state if one is not provided
      if (!req.body.state) {
          req.body.state = 'USA'
      }
      if (!req.body.foundedYear) {
        req.body.foundedYear = 'N/A'
      }

      // Save the new data into places[id]
      places[id] = req.body
      console.log('id: ', places[id])
      res.redirect(`/places/${id}`)
  }
})

// DELETE ROUTE
router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if(isNaN(id)) {
    res.render('error404')
  } else if(!places[id]) {
    res.render('error404')
  } else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})

// EDIT FORM
router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if(isNaN(id)) {
    res.render('error404')
  } else if(!places[id]) {
    res.render('error404')
  } else {
    res.render('places/edit', {place: places[id], id})
  }
})

module.exports = router