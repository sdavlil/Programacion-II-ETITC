function mostrar() {

   var mostarmas = document.getElementById("mostrarmas");

    if (mostarmas.style.display == "none") {
        mostarmas.style.display = "block";

    } else {

        mostarmas.style.display = "none";
    }

}

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Buenas Noches!';
} else if (hourNow > 12) {
    greeting = 'Buenas Tardes!';
} else if (hourNow > 0) {
    greeting = 'Buenos dias!';
} else {
    greeting = 'Bienvenido!';
}

document.write('<h3>' + greeting + '</h3>');


function comentarios() {

// Create a new element and store it in a variable.
var newEl = document.createElement('li');

var comentario = document.getElementById('coment').value;

// Create a text node and store it in a variable.
var newText = document.createTextNode(comentario);

// Attach the new text node to the new element.
newEl.appendChild(newText);

// Find the position where the new element should be added.
var lista = document.getElementById('agregar');

// Insert the new element into its position.
lista.appendChild(newEl);

}

function eliminarcomentarios(){

var contenedorEl = document.getElementById('agregar');

// Almacena el elemento a eliminar en una variable.
var removeEl = contenedorEl.getElementsByTagName('li');

// Elimina el elemento.
while (removeEl.length) {

contenedorEl.removeChild(removeEl[0]);

}
}

