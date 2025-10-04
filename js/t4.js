//funcion para calcular area de circulo 
function cArea(r) {
  return Math.PI * r * r;
}

//funcion para calcular perimetro de circulo
function cPerimetro(r) {
  return 2 * Math.PI * r;
}

// funcion para calcular perimetro de un poligono
function poliPerimetro(longitudLado, numLados) {
  return longitudLado * numLados;
}

//funcion para calcular area de un poligono 
function poliArea(longitudLado, numLados) {
  return (numLados * longitudLado * longitudLado) / (4 * Math.tan(Math.PI / numLados));
}

// console !!!!

let r = parseFloat(prompt("Introduce el radio del circulo:"));

alert("Area de circulo: " + cArea(r) +
      "\nPerimetro de circulo: " + cPerimetro(r));
console.log("Area de circulo:", cArea(r));
console.log("Perimetro de circulo:", cPerimetro(r));

let longitudLado = parseFloat(prompt("Introduce la longitud de un lado del poligono:"));
let numLados = parseInt(prompt("Introduce el num de lados del polgono:"), 10);

alert("Perimetro del poligono:: " + poliPerimetro(longitudLado, numLados) +
      "\nArea poligono: " + poliArea(longitudLado, numLados));
console.log("Perimetro del poligono:", poliPerimetro(longitudLado, numLados));
console.log("Area poligono:", poliArea(longitudLado, numLados));
