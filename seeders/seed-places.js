const db = require('../models')

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'https://cdn.vox-cdn.com/thumbor/hDmpsie1uGtJTmMKATG6WgmZJSg=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22870587/Weera_Thai.jpg',
    foundedYear: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'https://www.mercurycafe.com/wp-content/uploads/2022/05/coffeecounter.jpg',
    foundedYear: 2015
}, {
    name: 'Bahn Thai',
    city: 'San Diego',
    state: 'CA',
    cuisines: 'Thai',
    pic: 'https://media.sandiegoreader.com/img/photos/2021/01/18/bahn_thai_hillcrest_place_t670.jpg?b3f6a5d7692ccc373d56e40cf708e3fa67d9af9d',
    foundedYear: 2012
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})