// agregar estudiante a una clase
// calcular promedio de notas
// encontrar estudiante con promedio más alto
// listar estudiantes de una clase
let claseDaw = [];
let claseAsir = [];

function agregarEstudiante(arrayClase, nombre, edad, notas){
    arrayClase.push({nombre, edad, notas});
}

function calcularPromedio(notas){
    let suma = 0;
    for(let nota of notas){
        suma += nota;
    }
    return suma / notas.length;
}

function estudianteConMejorPromedio(arrayClase){
    const estudianteMejor = arrayClase.reduce((mejor, actual) => {
        const m1 = calcularPromedio(mejor.notas);
        const m2 = calcularPromedio(actual.notas);
        if (m1 > m2){
            return mejor;
        }else{
            return actual;
        }
    })
    return estudianteMejor;
}

function listarEstudiantes(arrayClase){
    console.log(`Lista de Alumnos:`);
    for(let estudiante of arrayClase){
        const media = calcularPromedio(estudiante.notas).toFixed(2);
        console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}, Promedio: ${media}`);
    }
}
//caso de uso
agregarEstudiante(claseDaw, "María", 28, [8.0, 8.5, 9.0, 5.0, 2]); 
agregarEstudiante(claseDaw, "Pedro", 19, [7.5, 8.1, 9.0]); 
agregarEstudiante(claseDaw, "Juan", 25, [6.0, 7.0, 6.5]); 

agregarEstudiante(claseAsir, "Carlos", 20, [4.2, 8.5, 9.0]); 
agregarEstudiante(claseAsir, "Ana", 21, [7.0, 6.0, 7.0]); 
agregarEstudiante(claseAsir, "Pepa", 19, [6.0, 6.0, 6.4]); 


listarEstudiantes(claseDaw);
const mejorDaw = estudianteConMejorPromedio(claseDaw);
console.log(`El mejor estudiante de DAW es ${mejorDaw.nombre} con un promedio de ${calcularPromedio(mejorDaw.notas).toFixed(2)}`);

listarEstudiantes(claseAsir);
const mejorAsir = estudianteConMejorPromedio(claseAsir);
console.log(`El mejor estudiante de ASIR es ${mejorAsir.nombre} con un promedio de ${calcularPromedio(mejorAsir.notas).toFixed(2)}`);