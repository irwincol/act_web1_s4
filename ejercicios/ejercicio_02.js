
// 2. Saludar con nombre por defecto
// Tarea: Crea una función que salude a una persona por su nombre. 
// Si no se proporciona un nombre, usa "Invitado".
// Tipo de función: Expresión de función
// Ejemplo: saludar() → ¡Hola, Invitado!

let saludar = (nombre="invitado") => `hola ${nombre}`;

console.log(saludar());
console.log(saludar("irwin"));

