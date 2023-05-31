
let edad = prompt("¿Cuál es tu edad?", "22");
let text;
if (edad >= 18) {
  text = "¡Hola, hola! Puedes seguir navegando~";
} else {
  text = "¡Ups! Continúa navegando bajo tu propio riesgo.";
}

		



window.addEventListener("beforeunload", (event) => {
  event.returnValue = true;
});