// 18. Validar correo electrónico
// Tarea: Crea una función que valide si una cadena es un correo electrónico básico (contiene @ y .com).
// Tipo de función: Declaración de función
// Ejemplo: esCorreo("test@example.com") → true

function esCorreo(correo) {
    return correo.includes("@") && correo.endsWith(".com");
}

console.log(esCorreo("test@example.com")); // true
console.log(esCorreo("test@ejemplo.org")); // false