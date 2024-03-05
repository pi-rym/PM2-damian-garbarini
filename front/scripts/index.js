console.log(tempData);

    function createPeliculas(peliculas) {
    const {title, year, director, duration, genre, rate, poster} = peliculas
    const a = document.createElement("a")

}

function cargarPeliculas() {
    const contenedor= document.getElementById("container")
    contenedor.innerHTML ="";
    const pelciulass = tempData[0];
    const peliculas = pelciulass.map((peli)=>createPeliculas(peli));
    return peliculas
    peliculas.forEach((pelicula) =>  contenedor.appendChild(pelicula) );
}
console.log(cargarPeliculas());
