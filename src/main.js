/* hacer que la barra de navegación se contraiga */

/* botón para contraer el menú */
const botonMenu = document.getElementById("menu");
/* barra de navegación lateral  */
const barraDeNavegacion = document.getElementById("navBar");
/* sección de contenido  */
const seccionContenido = document.getElementById("contentSection");
/* botón de estado */
const estado = document.getElementById("stateIcon");
//let color = "#ff4000";

function cambiar() {
  botonMenu.classList.toggle("rotated");
  barraDeNavegacion.classList.toggle("hidden");
  seccionContenido.classList.toggle("expanded");
  //estado.style.backgroundColor=color;
}
function cambiarEstado() {
  estado.classList.toggle("offline");
}

botonMenu.addEventListener("click", cambiar);
estado.addEventListener("click", cambiarEstado);
