const { Router } = require("express") 
const {getMoviesControllers , postMoviesControllers} = require("../controllers/moviesControllers")


const moviesRoute = Router()

moviesRoute.get("/", getMoviesControllers)

moviesRoute.post("/", postMoviesControllers)

module.exports = moviesRoute