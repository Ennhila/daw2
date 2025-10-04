function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const MIN = 1;
const MAX = 999;
let numOculto = getRandomInt(MIN, MAX);

// muestra el numero oculto en la consola
console.log("El número oculto es:", numOculto);

let intentos = 0;
let mensajeSalida = "";
let acertado = false;

while (!acertado) {
    let entrada = window.prompt(`Adivina el numero entre ${MIN} y ${MAX}.\nIntento: ${intentos + 1}`);

    if (entrada === null) {
        mensajeSalida = "Juego cancelado. Error";
        break;
    }

    let numeroUsuario = parseInt(entrada, 10);
    //verifica si es numero usuario entre 1 y 999 y es un numero
    if (isNaN(numeroUsuario) || numeroUsuario < MIN || numeroUsuario > MAX) {
        window.alert(`Introduce un numero valido entre ${MIN} y ${MAX}.`);
        continue;
    }
    intentos++;
    if (numeroUsuario === numOculto) {
        mensajeSalida = `Has acertado el numero ${numOculto} en ${intentos} intentos.`;
        acertado = true;
    } else if (numeroUsuario < numOculto) {
        window.alert(`El numero oculto es mayor que ${numeroUsuario}.`);
    } else {
        window.alert(`El numero oculto es menor que ${numeroUsuario}.`);
    }
}
//muestrar final mensaje la consola 
console.log(mensajeSalida);
console.log("Intentos realizados:", intentos);
