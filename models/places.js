const mongoose = require('mongoose')
const placeSchema = new mongoose.Schema({
  name: {type: String, required: true},
  city: {type: String, default: 'Anytown'},
  state: {type: String, default: 'USA'},
  cuisines: {type: String, required: true},
  pic: {type: String, default: 'https://d.newsweek.com/en/full/1519658/barcito-los-angeles.jpg?w=1600&h=1600&q=88&f=64b0d307cded2a8be3187114f44f175b'},
  foundedYear: Number
})

module.exports = mongoose.model('Place', placeSchema)

// module.exports = [{
//     name: 'H-Thai-ML',
//     city: 'Seattle',
//     state: 'WA',
//     cuisines: 'Thai, Pan-Asian',
//     pic: '/images/thai-restaurant.jpg',
//     foundedYear: '1998'
//   }, {
//     name: 'Coding Cat Cafe',
//     city: 'Phoenix',
//     state: 'AZ',
//     cuisines: 'Coffee, Bakery',
//     pic: '/images/coding-cat-cafe.jpeg',
//     foundedYear: '2006'
//   }] 