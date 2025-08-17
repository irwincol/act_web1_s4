// 12. Multiplicar elementos de un arreglo
// Tarea: Crea una función que multiplique todos los números de un arreglo.
// Tipo de función: Función de orden superior
// Ejemplo: multiplicarArreglo([2, 3, 4]) → 24
// Funciones de orden superior
// Una función de orden superior es aquella que recibe o devuelve otra función.

function multiplicarArreglo(arreglo) {
    return arreglo.reduce((acum, num) => acum * num, 1);
}

console.log(multiplicarArreglo([2, 3, 4]));
console.log(multiplicarArreglo([12, 3]));  

