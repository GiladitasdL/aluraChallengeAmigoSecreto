//Array para almacenar los nombres
let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let input = document.getElementById("nombreAmigo");
    let nombre = input.value.trim(); // Elimina espacios en blanco al inicio y al final

    // Validar la entrada, si el nombre es vacio
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Si el valor es válido, añadirlo al arreglo
    amigos.push(nombre);

    // Restablece el campo de texto a una cadena vacía.
    input.value = "";

    // Mostrar en consola para ver la lista de amigos actualizada
    console.log(amigos);
}
