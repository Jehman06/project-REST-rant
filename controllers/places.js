
const router = require('express').Router()
const db = require('../models')

// INDEX
router.get('/', (req, res) => {     
  db.Place.find()
  .then((places) => {
    res.render('places/index', {places})
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

// CREATE ROUTE
router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
    res.redirect('/places')
  })
  .catch(err => {
    if (err && err.name == 'ValidationError') {
      let message = ' '
      for (let field in err.errors) {
        message += `Founded year was ${err.errors[field].value}.`
        message += `${err.errors[field].message}`
      }
      console.log('Validation error message: ', message)
      res.render('places/new', {message})
    }
    else {
      res.render('error404')
    }
  })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

// SHOW ROUTE
router.get('/:id', (req,res) => {
  db.Place.findById(req.params.id)
  .then(place => {
    res.render('places/show', {place})
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

// EDIT ROUTE
router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

// DELETE ROUTE
router.delete('/:id', (req, res) => {
  res.send('DELETE /places:id stub')
})

// EDIT FORM
router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
  res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router