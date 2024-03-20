const {Schema, model} = require ("mongoose")

const movieSchema = new Schema({
    title:{
        type: String,
        require: true,
        unique: true
    },
    year: {
        type: Number,
        require: true,
        max: 2024,
        min: 1895
    },
    director:{
        type: String,
        require: true
    },
    duration:{
        type: String,
        require: true
    },
    genre:{
        type:[String],
        require: true
    },
    rate:{
        type: Number,
        require: true,
        max: 10,
        min: 1
    },
    poster:{
        type: String,
        require: true,
        unique: true
    }
})

const Movie = model("Movie", movieSchema)

module.exports = Movie
