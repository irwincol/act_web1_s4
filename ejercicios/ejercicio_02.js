
// 2. Saludar con nombre por defecto
// Tarea: Crea una función que salude a una persona por su nombre. 
// Si no se proporciona un nombre, usa "Invitado".
// Tipo de función: Expresión de función
// Ejemplo: saludar() → ¡Hola, Invitado!

const saludar = function(nombre = "Invitado") {
    return `¡Hola, ${nombre}!`;
};

console.log(saludar("Irwin"));
console.log(saludar()); 
