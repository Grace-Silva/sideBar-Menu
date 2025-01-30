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
/* botón para contraerMenu de color */
const botonColor = document.getElementById("modeButton");

/* contraer la barra de navegación y expandir el contenido principal. rota el ícono del botón 180 grados */
function contraerMenu() {
  botonMenu.classList.toggle("rotated");
  barraDeNavegacion.classList.toggle("hidden");
  seccionContenido.classList.toggle("expanded");
  //estado.style.backgroundColor=color;
}
// camnia el color del ícono de estado
function cambiarEstado () {
  estado.classList.toggle("offline");
}

botonMenu.addEventListener("click", contraerMenu);
estado.addEventListener("click", cambiarEstado);

botonColor.addEventListener("click", ()=>{
  /* ícono dentro del botón, cambia de sol a luna */
  let toggleColorIcon = document.getElementById("toggleColorIcon");

  toggleColorIcon.classList.toggle("fa-moon");// clase propia de font awesome
  toggleColorIcon.classList.toggle("fa-sun");

  document.body.classList.toggle("lightMode");

});
