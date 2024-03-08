const renderizadoDePeliculas = require("./renderPelis")

const getPelis = (data) =>{
    data.forEach(renderizadoDePeliculas)
}

$.get(`https://students-api.2.us-1.fl0.io/movies`, getPelis);