// 19. Retrasar ejecución de un mensaje
// Tarea: Crea una función que imprima un mensaje después de un tiempo definido por el usuario.
// Tipo de función: Función anónima con setTimeout
// Ejemplo: retrasarMensaje("Hola", 2000) → Imprime "Hola" tras 2 segundos.

const retrasarMensaje = function(mensaje, tiempo) {
    setTimeout(function() {
        console.log(mensaje);
    }, tiempo);
};

retrasarMensaje("Hola", 2000); // Imprime "Hola" tras 2 segundos