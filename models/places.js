const mongoose = require('mongoose')
const placeSchema = new mongoose.Schema({
  name: {type: String, required: true},
  city: {type: String, default: 'Anytown'},
  state: {type: String, default: 'USA'},
  cuisines: {type: String, required: true},
  pic: {type: String, default: 'https://cdn.vox-cdn.com/thumbor/0LszXQmBEuNvTgksqb23sd2vqA8=/0x0:1000x600/1200x900/filters:focal(420x220:580x380):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/68734628/Born___Raised.0.jpg'},
  foundedYear: {
    type: Number,
    min: [1673, ' Most likely not that old!'],
    max: [new Date().getFullYear(), ' Hey, this year is in the future!']
  } 
})

placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.foundedYear}.`
}

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