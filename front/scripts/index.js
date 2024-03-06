const seccionDePeliculas = document.getElementById('containerDePeliculas')

const getPelis = (data) =>{
    console.log(data);
    data.forEach(renderizadoDePeliculas)
}

$.get(`https://students-api.2.us-1.fl0.io/movies`, getPelis)

function renderizadoDePeliculas (pelicula) {

    const peliculas = document.createElement('article')
    peliculas.classList.add("peliculas")

    const ContenedorPeliculas= document.createElement('div')
    ContenedorPeliculas.classList.add("conPeli")


    peliculas.innerHTML = `<img src="${pelicula.poster}" alt="${pelicula.title}">`

    ContenedorPeliculas.innerHTML = ` 
    <h4>${pelicula.title} (${pelicula.year})</h4> 
    <p> Director: ${pelicula.director}</p>
    <p> Duracion: ${pelicula.duration}</p>
    <p> Genero: ${pelicula.genre.join(", ")}</p>
    <p class="calificacion"> Rate: ${pelicula.rate}</p>
    `
    seccionDePeliculas.appendChild(peliculas)
    peliculas.appendChild(ContenedorPeliculas)

}
