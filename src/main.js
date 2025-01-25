/* hacer que la barra de navegación se contraiga */

/* botón para contraer el menú */
const botonMenu = document.getElementById("menu");
/* barra de navegación lateral  */
const barraDeNavegacion = document.getElementById("navBar");
/* sección de contenido  */
const seccionContenido = document.getElementById("contentSection");

function cambiar() {
    botonMenu.classList.toggle("rotated");
    barraDeNavegacion.classList.toggle("hidden");
    seccionContenido.classList.toggle("expanded");
}

botonMenu.addEventListener("click", cambiar);