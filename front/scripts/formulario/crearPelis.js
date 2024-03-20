const axios = require("axios")
class Movies {
    constructor(title, year, director, duration, genre, rate, poster) {
        this.title = title,
        this.year = year,
        this.director = director,
        this.duration = duration,
        this.genre = genre,
        this.rate = rate,
        this.poster = poster
    }
}

//tomo los imputs
const generos = document.getElementById("generos");
const title = document.getElementById("title");
const director = document.getElementById("director");
const year = document.getElementById("year");
const duration= document.getElementById("duration");
const rate = document.getElementById("rate");
const poster = document.getElementById("poster");

function genreValores() {

    const checkboxes = generos.querySelectorAll('input[type="checkbox"]');
    const valoresSeleccionados = [];

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            valoresSeleccionados.push(checkbox.value);
        }
    });
    
    return valoresSeleccionados
}

function handlerSubmit(event) {
    event.preventDefault();
    const generoValue = genreValores()

    if (![title.value, director.value, year.value, duration.value, generoValue, rate.value, poster.value].every(Boolean)|| generoValue.length === 0) {
        return alert("Faltan llenar campos");
    }
    if (rate.value<0 || rate.value>10 ) {
        return alert("La calificacion debe de estar entre 0 y 10. Verifique los campos e intente nuevamente.");
    }
    if (year.value < 1895 || year.value > 2024 ) {
        return alert("El año debe de estar entre 1895 y 2024. Verifique e intente nuevamente.");
    }

    const titleValue = title.value;
    const yearValue = year.value;
    const directorValue = director.value;
    const durationValue = duration.value;
    const genreValue = generoValue
    const rateValue = rate.value;
    const PosterValue = poster.value;


    const data = new Movies (titleValue, yearValue, directorValue, durationValue, genreValue, rateValue, PosterValue);
    
    axios.post("http://localhost:3000/movies", data)
    .then((response) => {
        response.data
    })
    .catch((error) => {
        error.message;
    });

    return alert("Pelicula enviada!")
}


const botonSubmit = document.getElementById("enviar");
botonSubmit.addEventListener("click", handlerSubmit); 


function limpiar() {
    title.value=""
    director.value=""
    year.value=""
    duration.value=""
    rate.value=""
    poster.value=""
    //faltan limpiar los generos
}

const botonLimpiar = document.getElementById("limpiarForm");
botonLimpiar.addEventListener("click", limpiar)



