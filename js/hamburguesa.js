const boton = document.getElementById('miHamburguesa');

function alternarClaseAlBoton() {
    // 'classList.toggle()' agrega la clase si no está presente, y la quita si sí lo está.
    boton.classList.toggle('is-active');
}

boton.addEventListener('click', alternarClaseAlBoton);