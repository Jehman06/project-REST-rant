
const router = require('express').Router()

// CREATE ROUTE
router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})

// CREATE NEW
router.get('/new', (req, res) => {
  res.render('places/new')
})

// GET PLACES
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/thai-restaurant.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coding-cat-cafe.jpeg'
      }]      
    res.render('places/index', {places})
})

module.exports = router