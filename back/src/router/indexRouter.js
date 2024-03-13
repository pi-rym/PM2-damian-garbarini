const { Router } = require("express") 
const moviesControllers = require("../controllers/moviesControllers")


const router = Router()

router.get("/movies", moviesControllers)


module.exports = router 