// 5. Contar vocales en una cadena
// Tarea: Crea una función que cuente las vocales (a, e, i, o, u) en una cadena.
// Tipo de función: Función recursiva
// Ejemplo: contarVocales("hola") 



function contarVocales(cadena) {
 
    if (cadena.length === 0) {
        return 0;
    }

    // Tomamos el primer carácter y lo pasamos a minúscula
    let letra = cadena[0].toLowerCase();

    // Comprobamos si es vocal
    let esVocal = "aeiou".includes(letra) ? 1 : 0;

    // Llamada recursiva para el resto de la cadena
    return esVocal + contarVocales(cadena.slice(1))
}

// Ejemplo de uso
console.log(contarVocales("hola"));        
console.log(contarVocales("said"));  
console.log(contarVocales(""))    
