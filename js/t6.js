// Tarea 6
let num = window.prompt("Introduce un numero entre 1 y 7: ");
num = Number(num);

switch(num){
    case 1:
        console.log("El nombre del dia es lunes");
        break;
    case 2:
        console.log("El nombre del dia es Martes");
        break;
    case 3:
        console.log("El nombre del dia es Miercoles");
        break;
    case 4:
        console.log("El nombre del dia es Jueves");
        break;
    case 5:
        console.log("El nombre del dia es Viernes");
        break;
    case 6:
        console.log("El nombre del dia es Sabado");
        break;
    case 7:
        console.log("El nombre del dia es Domingo");
        break;
    default:
        if (num < 1){
            console.log(`${num} el numero es invalido prq es menor que 1`);
            //aqui verificamos se el numero es invalido
        }else{
            console.log(`${num} el numero es invalido prq es mayor que 7`);
            
        }
}