const getPeliculasService = require("../services/movieService")

const getMoviesControllers = async (req, res)=>{

    try {

        const movies =  await getPeliculasService()
        res.status(200).json(movies)
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports = getMoviesControllers
