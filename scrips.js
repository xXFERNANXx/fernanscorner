var miDiv = document.getElementById('contenido');
miDiv.addEventListener('click', function() {window.location.href = 'info.html';})
function cambiarContenido(opcion) {
    var contenidoElement = document.getElementById('contenido');

    // Verifica la opción seleccionada y actualiza el contenido
    if (opcion === 'opcion1') {
        contenidoElement.textContent = 'Has seleccionado la Opción 1. Aquí está su contenido.';
    } else if (opcion === 'opcion2') {
        contenidoElement.textContent = 'Has seleccionado la Opción 2. Aquí está su contenido.';
    } else if (opcion === 'opcion3') {
        contenidoElement.textContent = 'Has seleccionado la Opción 3. Aquí está su contenido.';
    }
}