const axios = require("axios")
const genreValores = require("./validacion")


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

const title = document.getElementById("title");
const director = document.getElementById("director");
const year = document.getElementById("year");
const duration= document.getElementById("duration");
const rate = document.getElementById("rate");
const poster = document.getElementById("poster");



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
        if(response.status === 201) {
            alert("Pelicula enviada!")
        }
    })
    .catch((error) => {
        alert("Hay datos duplicados, verifique e intente nuevamente");
        console.log(error);
    })

    
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
    genre.value=""
}

const botonLimpiar = document.getElementById("limpiarForm");
botonLimpiar.addEventListener("click", limpiar)



