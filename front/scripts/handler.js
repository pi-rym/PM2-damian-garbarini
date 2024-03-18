const renderizadoDePeliculas = require("./renderPelis")
const axios = require("axios");

const getPeliculas = async()=>{

    try {
        const {data} = await axios.get("http://localhost:3000/movies")
        data.forEach(renderizadoDePeliculas)
    } catch (error) {
        console.log("no carga la pagina:", error.message);
    }
}


module.exports = getPeliculas; 