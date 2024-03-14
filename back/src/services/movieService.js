const axios = require("axios")


const getPeliculasService = async()=>{

    try {
        let arrPelis = []

        const {data} = await axios("https://students-api.up.railway.app/movies")
        data.forEach(pelis => {arrPelis.push(pelis)})
        return arrPelis

    } catch (error) {
        console.log(error);
    }
}

module.exports = getPeliculasService