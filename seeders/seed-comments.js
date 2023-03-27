const db = require('../models')

async function seed() {
    // Get the place, H-Thai-ML
    let place = await db.Place.findOne({name: 'H-Thai-ML'})
    
    // Create a fake sample comment
    let comment = await db.Comment.create({
        author: 'Jehman',
        rant: false,
        stars: 5.0,
        content: 'Wow, the best! Highly recommend this place! Very geeky.'
    })

    // Add that comment to the place's comment array
    place.comments.push(comment.id)

    // Save the place now that it has a comment
    await place.save()

    // Exit the program
    process.exit()
}

seed()