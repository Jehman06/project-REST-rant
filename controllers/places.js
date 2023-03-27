
const router = require('express').Router()
const db = require('../models')

// INDEX
router.get('/', (req, res) => {     
  db.Place.find()
    .then((places) => {
      res.render('places/index', {places})
    })
    .catch(err => {
      console.log('error', err)
      res.render('error404')
    })
})

// CREATE ROUTE
router.post('/', (req, res) => {
  if (req.body.pic === '') {req.body.pic = undefined}
  if (req.body.city === '') {req.body.city = undefined}
  if (req.body.state === '') {req.body.state = undefined}
  db.Place.create(req.body)
    .then(() => {
      res.redirect('/places')
    })
    .catch(err => {
      if (err && err.name == 'ValidationError') {
        let message = ' '
        for (let field in err.errors) {
          message += `Founded Year was ${err.errors[field].value}.`
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

// CREATE FORM
router.get('/new', (req, res) => {
  res.render('places/new')
})

// SHOW ROUTE
router.get('/:id', (req,res) => {
  db.Place.findById(req.params.id)
    .populate('comments')  
      .then(place => {
        console.log(place.comments)  
        res.render('places/show', {place})
        })
        .catch(err => {
          console.log('err', err)
          res.render('error404')
        })
})

// EDIT ROUTE
router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect(`/places/${req.params.id}`)
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
})

// DELETE ROUTE
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
    .then(deletedPlace => {
      console.log(deletedPlace)
      res.redirect('/places')
    })
    .catch(err => {
      console.log('error', err)
      res.render('error404')
    })
})

// EDIT FORM
router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
    .then(place => {
      res.render('places/edit', {place})
    })
    .catch(err => {
      console.log('error', err)
      res.render('error404')
    })
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
  res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router