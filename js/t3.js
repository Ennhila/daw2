function calcularF(n) {
  let factorial = 1;
  for (let i = n; i > 0; i--) {
    factorial = factorial * i;
  }
  return factorial;
}

let entrada = window.prompt("Introducxe un numero: ");
let numero = parseInt(entrada);

if (isNaN(numero) || numero < 0) {
  window.alert("Error, introduce un numero POSITIVO");
} else {
    let r = calcularF(numero);
    console.log("factorial de esta numero es: " + r);    
}
