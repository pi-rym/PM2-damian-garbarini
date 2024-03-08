const seccionDePeliculas = document.getElementById('containerDePeliculas')


function renderizadoDePeliculas (pelicula) {
    
    const peliculas = document.createElement('article')
    peliculas.classList.add("peliculas")
    
    const DescripcionPeliculas= document.createElement('div')
    DescripcionPeliculas.classList.add("conPeli")
    
    
    peliculas.innerHTML = `<img src="${pelicula.poster}" alt="${pelicula.title}">`
    
    DescripcionPeliculas.innerHTML = ` 
    <h4>${pelicula.title} (${pelicula.year})</h4> 
    <p> Director: ${pelicula.director}</p>
    <p> Duracion: ${pelicula.duration}</p>
    <p> Genero: ${pelicula.genre.join(", ")}</p>
    <p class="calificacion"> Rate: ${pelicula.rate}</p>
    `
    peliculas.appendChild(DescripcionPeliculas)
    seccionDePeliculas.appendChild(peliculas)
    
}

module.exports = renderizadoDePeliculas ;