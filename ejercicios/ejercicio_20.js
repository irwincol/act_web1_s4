// 20. Calcular promedio de un arreglo
// Tarea: Crea una función que calcule el promedio de un arreglo de números.
// Tipo de función: Función flecha
// Ejemplo: promedio([10, 20, 30]) → 20

const promedio = arreglo => arreglo.reduce((a, b) => a + b, 0) / arreglo.length;

console.log(promedio([10, 2, 30]));
