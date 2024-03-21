const {getAllPeliculas, createMovie} = require("../services/movieService")

const getMoviesControllers = async (req, res)=>{
    try {
        const movies =  await getAllPeliculas()
        res.status(200).json(movies)
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const postMoviesControllers = async (req, res) => {
    try {
        const {title, year, director, duration, genre, rate, poster} = req.body;
        const newMovie = await createMovie({title, year, director, duration, genre, rate, poster});
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}


module.exports = {getMoviesControllers, postMoviesControllers}
