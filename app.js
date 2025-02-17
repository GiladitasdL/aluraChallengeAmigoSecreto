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

    console.log(amigos);
    mostrarListaAmigos();
}

function mostrarListaAmigos() {

    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista antes de agregar nuevos elementos
    //    lista.innerHTML = "";

    // Recorrer el array amigos y agregar cada nombre a la lista
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); // Crear un elemento <li>
        li.textContent = amigos[i]; // Asignar el nombre del amigo al <li>
        lista.appendChild(li); // Agregar el <li> a la lista
    }
}

function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el HTML
    let resultado = document.getElementById("resultadoSorteo");
    resultado.innerHTML = `<strong>El amigo secreto es: ${amigoSorteado} 🎉</strong>`;
}
