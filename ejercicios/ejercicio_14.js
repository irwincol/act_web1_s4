// 14. Generar un ID único
// Tarea: Crea una función que genere un ID único basado en un contador interno.
// Tipo de función: IIFE con closure
// Ejemplo: generarId() → 1, generarId() → 2

const generarId = (function() {
    let id = 0;
    return function() {
        id++;
        return id;
    }
})();

console.log(generarId()); // 1
console.log(generarId()); // 2