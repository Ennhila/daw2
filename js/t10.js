function calcular(num1, operado, num2) {
  num1 = parseInt(window.prompt("Introduce el primero numero: "));
  operado = window.prompt("Introduce el operador que puede ser +, -, * o /");
  num2 = parseInt(window.prompt("Introduce el segundo numero: "));
  try {

    //Si alguno de los valores no es un número, lanza un error.
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("alguno de los valores no es un número");
    }

    //Si intentas dividir por cero, lanza un error
    if (operado === "/" && num2 == 0) {
      throw new Error(" intentas dividir por cero");
    }
    // Si todo es correcto, realiza la operación y devuelve el resultado.
    let r = 0;
    switch (operado) {
      case `+`:
        r = num1 + num2;
        console.log(r);
        break;
      case `-`:
        r = num1 - num2;
        console.log(r);
        break;
      case `*`:
        r = num1 * num2;
        console.log(r);
        break;
      case `/`:
        r = num1 / num2;
        console.log(r);
        break;
      default:
        //Si el operador no es válido, lanza un error.
        throw new Error("el operador no es válido");
    }
    return r;
  } catch (error) {
    console.log("Error:", error.message);
  }
}

calcular();
