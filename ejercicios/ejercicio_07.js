//  Filtrar números mayores a 10
// Tarea: Crea una función que reciba un arreglo y devuelva solo los números mayores a 10.
// Tipo de función: Función de orden superior
// Ejemplo: filtrarMayores([5, 12, 8, 15]) → [12, 15]



unciones de orden superior
Una función de orden superior es aquella que recibe o devuelve otra función.
const filtrarPares = (arr) => arr.filter(num => num % 2 === 0);
console.log(filtrarPares([1, 2, 3, 4, 5, 6])); // [2, 4, 6]