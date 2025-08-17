// 6. Filtrar números mayores a 10
// Tarea: Crea una función que reciba un arreglo y devuelva solo los números mayores a 10.
// Tipo de función: Función de orden superior
// Ejemplo: filtrarMayores([5, 12, 8, 15]) → [12, 15]

// 6. Filtrar números mayores a 10

// Funciones de orden superior
// Una función de orden superior es aquella que recibe o devuelve otra función.


function filtrarMayores(arreglo) {
    return arreglo.filter(num => num > 10);
}

console.log(filtrarMayores([3, 7, 20, 11]))


