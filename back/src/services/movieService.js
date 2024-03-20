/* const axios = require("axios") */
const Movie = require("../model/Movie")

/* const getPeliculasService = async()=>{

    try {
        let arrPelis = []

        const {data} = await axios("https://students-api.up.railway.app/movies")
        data.forEach(pelis => {arrPelis.push(pelis)})
        return arrPelis

    } catch (error) {
        console.log(error);
    }
} */


/* module.exports= {
    getAllPeliculas : async()=>{

        try {
            const {data} = await axios.get("http://students-api.up.railway.app/movies")
            return data
        } catch (error) {
            throw new Error(error)
        }
    }
    
} */

module.exports= {
    getAllPeliculas : async()=>{

        try {
            const movies = await Movie.find()
            return movies
        } catch (error) {
            throw new Error(error)
        }
    }
    
}