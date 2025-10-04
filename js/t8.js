// DNI es 8 numeros y una letra
// paso 1: verifica dni.length = 9
// paso 2: verifica numeros es mayor de 0 y menor de 9
// paso 3: los 8 digitos en un numero se divide por 23 y el resto es clave por la letra
// paso 4: obtener la letra que corresponder a ese numero

function verificarDNI(dni) {
  let cadena = `TRWAGMYFPDXBNJZSQVHLCKE`; //EMPIEZA DESDE 0 NO 1 HASTA 22; 0 = T y 22 = E
  //paso 1
  if (dni.length !== 9) {
    return false;
  }

  // EJEMPLOS CON 3 BUCLES FOR, FOR IN , FOR OF, MAS FACIL ES (FOR) y (FOR IN)
  //paso 2
  let numero = "";
  for (let i = 0; i < 8; i++) {
    if (dni[i] < "0" || dni[i] > "9") {
      return false;
    }
    numero += dni[i];
  }

  /*   for (let i in dni) {
    if (i < 8) {
      if (dni[i] < "0" || dni[i] > "9") {
        return false;
      }
      numero += dni[i];
    }
  }  */

  /*   let test = 0;
  for (let i of dni) {
    if (test < 8) {
      if (i < "0" || i > "9") {
        return false;
      }
      numero += i;
    }
    test++;
  } */

  //primera parte de dni es 8 numeros
  let dniF = dni[8];

  //segunda parte la letra
  //paso 3
  let letra = numero % 23;
  //paso 4
  let letraFinal = cadena[letra];

  return dniF == letraFinal;
}
// dos ejemplos true y false
console.log(verificarDNI("12345678Z"));
console.log(verificarDNI("99999999R"));

console.log(verificarDNI("10000000T"));
console.log(verificarDNI("12345678W"));
