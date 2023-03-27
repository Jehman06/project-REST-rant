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
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }] 
})

placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.foundedYear}.`
}

module.exports = mongoose.model('Place', placeSchema)