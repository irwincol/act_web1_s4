// 3. Sumar elementos de un arreglo
// Tarea: Crea una función que sume todos los números de un arreglo.
// Tipo de función: Función flecha
// Ejemplo: sumarArreglo([1, 2, 3]) → 6


// 3. Sumar elementos de un arreglo

let sumarArreglo = (arreglo) => {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++){
        suma += arreglo[i];
    }
    return suma;
}

// Prueba de la función
console.log(sumarArreglo([1, 4, 3]));



