// 13. Reemplazar espacios por guiones
// Tarea: Crea una función que reemplace los espacios
//  en una cadena por guiones.
// Tipo de función: Expresión de función
// Ejemplo: reemplazarEspacios("Hola Mundo") → Hola-Mundo


function reemplazarEspacios(cadena) {
    return cadena.replace(/ /g, "-");
}
console.log(reemplazarEspacios("hola a todos"));


