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
/* botón para cambiar el modo de color */
const botonColor = document.getElementById("modeButton");

/* contraer la barra de navegación y expandir el contenido principal. rota el ícono del botón 180 grados */
function contraerMenu() {
  botonMenu.classList.toggle("rotated");
  botonMenu.setAttribute("title", "Show Menu");
  barraDeNavegacion.classList.toggle("hidden");
  seccionContenido.classList.toggle("expanded");
  //estado.style.backgroundColor=color;
}
  botonMenu.addEventListener("click", contraerMenu);

// guarda el color del ícono de estado
function cambiarEstado () {
  const estadoActual = localStorage.getItem("state");

  if(estadoActual==="offline"){
    estado.classList.add("offline");
    estado.title = "Offline";
  } else{
    estado.classList.remove("offline");
    estado.title = "Online";
  }
  //estado.classList.toggle("offline");
}
  cambiarEstado();
  // cambia el color del ícono de estado  
estado.addEventListener("click", ()=>{
  estado.classList.toggle("offline");

  if (estado.classList.contains("offline")) {
    localStorage.setItem("state", "offline");
    estado.title = "Offline";
  } else {
    localStorage.setItem("state", "online"); // configuración por default
    estado.title = "Online";
  }
});
//estado.addEventListener("click", cambiarEstado);


// cambio de modo de color, oscuro a claro
function aplicarModo() {

  const modoSalvado = localStorage.getItem("mode");

  if (modoSalvado==="lightMode") {
    document.body.classList.add("lightMode");
    /* alternar los íconos */
    toggleColorIcon.classList.remove("fa-moon");
    toggleColorIcon.classList.add("fa-sun");
    botonColor.title = "Light Mode";
  } else {
    document.body.classList.remove("lightMode");
    toggleColorIcon.classList.remove("fa-sun");
    toggleColorIcon.classList.add("fa-moon");
    botonColor.title = "Dark Mode";
  }
}
aplicarModo();


botonColor.addEventListener("click", ()=>{
  /* ícono dentro del botón, cambia de sol a luna */
  let toggleColorIcon = document.getElementById("toggleColorIcon");

  toggleColorIcon.classList.toggle("fa-moon");// clase propia de font awesome
  botonColor.title = "Dark Mode";
  toggleColorIcon.classList.toggle("fa-sun");

  document.body.classList.toggle("lightMode");

    if (document.body.classList.contains("lightMode")) {
      localStorage.setItem("mode", "lightMode");
      botonColor.title = "Light Mode";
    } else {
      localStorage.setItem("mode", "darkMode"); // darkmode por default
      botonColor.title = "Dark Mode";
    }
});

const botonesExpandibles = document.querySelectorAll(".dropdownButton");

botonesExpandibles.forEach((e) =>{
  e.addEventListener("click", ()=>{
    const dropDownMenu = e.parentElement;
    const flecha = e.lastChild;
    dropDownMenu.classList.toggle("show");
    flecha.classList.toggle("show")
  });
});