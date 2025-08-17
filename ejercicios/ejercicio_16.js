// 16. Sumar argumentos variables
// Tarea: Crea una función que sume un número variable de argumentos.
// Tipo de función: Función flecha con parámetro rest
// Ejemplo: sumar(1, 2, 3, 4) → 10

const sumar = (...numeros) => numeros.reduce((acum, num) => acum + num, 0);

console.log(sumar(1, 2, 3, 4)); 
console.log(sumar(5, 10)); 