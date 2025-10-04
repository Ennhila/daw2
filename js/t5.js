function eje5(num){
    // primera funcion para verificar el numero
    (function(n){
        if(n > 0){
            console.log(n + " numero es positivo");
        }else if ( n < 0){
            console.log(n + " numero es negativo");
        }else{
            console.log(n + " es cero");
        }
    })(num);

    // funcion flecha
    const cuadrado = n => n * n;
    //Devolvera esta resultado
    return cuadrado(num);
}
//llama la funcion
const r1 = eje5(5);
const r2 = eje5(-3);
const r3 = eje5(0);
// Muestrar 3 resultado en consola
console.log("Cuadrado de 5:", r1);
console.log("Cuadrado de -3:", r2);
console.log("Cuadrado de 0:", r3);