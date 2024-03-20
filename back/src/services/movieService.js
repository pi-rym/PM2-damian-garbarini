const Movie = require("../model/Movie")

module.exports= {
    getAllPeliculas : async()=>{

        try {
            const movies = await Movie.find()
            return movies
        } catch (error) {
            throw new Error(error)
        }
    },

    createMovie: async (movie)=>{
        const newMovie = await Movie.create(movie)
        return newMovie
    }
}