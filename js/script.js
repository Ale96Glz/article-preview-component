const botonMostrar = document.querySelector("#btnMostrar");
const componente = document.querySelector("#oculto");
const botonOcultar = document.querySelector("#btnOcultar");

let componenteVisible = false;

function toggleComponente() {
  if (componenteVisible) {
    componente.style.display = "none";
  } else {
    componente.style.display = "flex";
  }
  componenteVisible = !componenteVisible;
}

botonMostrar.addEventListener("click", toggleComponente);
botonOcultar.addEventListener("click", toggleComponente);
