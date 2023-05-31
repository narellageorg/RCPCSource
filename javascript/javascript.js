
let edad = prompt("¿Cuál es tu edad?", "22");
let text;
if (edad >= 18) {
  text = "¡Hola, hola! Puedes seguir navegando~";
} else {
  text = "¡Ups! Continúa navegando bajo tu propio riesgo.";
}


var estaseguro = false;
function estaseguro() {
    if(allowPrompt){
        if (!estaseguro && true) {
            estaseguro = true;
            var confMessage = " ¿Estás seguro que quieres abandonar la página? ¡Nos vemos pronto!";
            return confMessage;
        }
    }else{
        allowPrompt = true;
    }
}

var allowPrompt = true;
window.onbeforeunload = estaseguro;