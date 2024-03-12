const renderizadoDePeliculas = require("./renderPelis")
const axios = require("axios");

const getPeliculas = async()=>{

    try {
        const promesa = await axios.get("https://students-api.up.railway.app/movies")
        console.log(promesa.data);
        promesa.data.forEach(renderizadoDePeliculas)
    } catch (error) {
        console.log("no carga la pagina", error);
    }
}
module.exports = getPeliculas; 