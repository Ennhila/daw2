/*
    En esta tarea utilizo esta primera respuesta en stackoverflow 
    porque no sabía cómo responderla solo

    La respuesta: https://stackoverflow.com/questions/14813369/palindrome-check-in-javascript

    Ahora entiendo cómo funciona el codigo

    Déjame decirte lo que entendí:

    Por ejemplo una plabra = "ilyass"
    1- .split("") es para divide el string en un array de caracteres
        // ["i", "l", "y", "a", "s", "s"]
    2- .reverse() este método invierte el orden de los elementos del array
        // ["s", "s", "a", "y", "l", "i"]
    3- .join("") Vuelve a unir todos los elementos del array en un string, sin comas
        // ssayli
    
    let revers = string.split("").reverse().join("");

*/

function esPalindroma(string) {
  // paso 1: poner todo en minúsculas
  string = string.toLowerCase();

  // paso 2: quitar espacios
  string = string.replaceAll(" ", "");

  // paso 3
  let revers = string.split("").reverse().join("");

  // paso 4: comparar
  if (string === revers) {
    return true;
  } else {
    return false;
  }
}

console.log(esPalindroma("ilyass"));
console.log(esPalindroma("area"));
console.log(esPalindroma("Ana"));
