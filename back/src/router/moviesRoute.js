const { Router } = require("express") 
const getMoviesControllers = require("../controllers/moviesControllers")


const moviesRoute = Router()

moviesRoute.get("/", getMoviesControllers)


module.exports = moviesRoute