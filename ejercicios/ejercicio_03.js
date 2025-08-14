// 3. Sumar elementos de un arreglo
// Tarea: Crea una función que sume todos los números de un arreglo.
// Tipo de función: Función flecha
// Ejemplo: sumarArreglo([1, 2, 3]) → 6


// 3. Sumar elementos de un arreglo
const sumarArreglo = (arreglo) => {
    let suma = 0;
    let i = 0;

    while (i < arreglo.length) {
        suma += arreglo[i];
        i++;
    }

    return suma;
};

console.log(sumarArreglo([1, 4, 3])); 

