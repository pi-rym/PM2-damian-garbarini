const generos = document.getElementById("generos");



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

module.exports = genreValores 
