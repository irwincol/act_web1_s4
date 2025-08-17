// 5. Contar vocales en una cadena
// Tarea: Crea una función que cuente las vocales (a, e, i, o, u) en una cadena.
// Tipo de función: Función recursiva
// Ejemplo: contarVocales("hola") 

function contarVocales(cadena) {
    if (cadena.length === 0) {
        return 0;
    }
    let letra = cadena[0].toLowerCase();
    let esVocal = "aeiou".includes(letra) ? 1 : 0;
    return esVocal + contarVocales(cadena.slice(1));
}

console.log(contarVocales("said"));        // 2
console.log(contarVocales("ola"));            // 0
