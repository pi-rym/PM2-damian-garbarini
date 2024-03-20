const axios = require("axios")


const genre = [ "Action" , "fantasy", "comedy", "Drama", "Terror", "Adventure", "romance", "sci-fi"]


const botonSubmit = document.getElementById("enviar");
const botonLimpiar = document.getElementById("limpiarForm");
const generos = document.getElementById("options");
    const title = document.getElementById("title");
    const director = document.getElementById("Director");
    const year = document.getElementById("year");
    const duration= document.getElementById("duration");
    const rate = document.getElementById("rate");
    const poster = document.getElementById("poster");


function renderGeneres(){
    generos.innerHTML= ""
    for(const genre of genres){
        const input= document.createElemet("input")
        const label= document.createElemet("label")

        input.type="checkbox"
        input.id= genre
        input.name = "genre[]"
        input.value= genre

        label.htmlFor= genre
        label.textContent= genre

        generos.appendChild(input)
        generos.appendChild(label)
    }   
    return generos
}


function validacionCheckboxes() {
    
}



function handlerSubmit(event) {
    event.preventDefault()

    if (![title.value, director.value, year.value, duration.value,generos.value,rate.value,poster.value].every(boolean))
    return alert ("Faltan llenar campos")
        
    return alert("Pelicula ennviada")
}

botonSubmit.addEventListener("click", handlerSubmit())
handlerSubmit()


function limpiar() {
    title.value=""
    director.value=""
    year.value=""
    duration.value=""
    rate.value=""
    poster.value=""


    //faltan limpiar los generos
}
botonLimpiar.addEventListener("click", limpiar())


/* function crearPelis () {
    const title = document.getElementById("title");
    const titleValor = title.value;

    const Director = document.getElementById("Director");
    const DirectorValor = Director.value;

    const year = document.getElementById("year");
    const yearValor = year.value;

    const duration= document.getElementById("duration");
    const durationValor = duration.value;

    const generos = document.getElementById("generos");
    const generosValor = generos.value;

    const rate = document.getElementById("rate");
    const rateValor = rate.value;

    const poster = document.getElementById("poster");
    const posterValor = poster.value;

    //validacion 

    const peliculaFormulario = {
        title : titleValor,
        Director : DirectorValor,
        year : yearValor,
        duration : durationValor,
        generos : generosValor,
        rate : rateValor,
        poster : posterValor
    }
    return peliculaFormulario
}
 */

