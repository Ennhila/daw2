//Haz un programa que calcule la nota media de un conjunto indeterminado de notas numéricas.
//El programa pedirá notas hasta que el usuario pulse cancelar. En ese momento mostrará en la página el
//valor de la media aritmética de las notas introducidas.
let suma = 0;
let contador = 0;
let nota = 0;
while( nota !== null){
    let entrada = window.prompt("Introdue una nota o pulsa cancelar para terminar: ");
    nota = parseFloat(entrada);
    
    if(!isNaN(nota)){
        console.log(nota);
        suma += nota;
        contador++;
    }
}

//if(contador == 0){
//    window.alert("No hay ninguna nota");
//}else {
    let notaMedia = suma / contador;
    window.alert("la nota media es: " +notaMedia);
    console.log(notaMedia);
//