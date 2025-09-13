// Lista inicial de jugadores legendarios
const jugadores = [
    "Alfredo Di Stéfano",
    "Cristiano Ronaldo",
    "Raúl González",
    "Iker Casillas",
    "Zinedine Zidane",
    "Sergio Ramos",
    "Luka Modrić"
];

// Mostrar la lista en la página
const listaJugadores = document.getElementById('lista-jugadores');

function mostrarJugadores() {
    listaJugadores.innerHTML = "";
    jugadores.forEach(jugador => {
        const li = document.createElement("li");
        li.textContent = jugador;
        listaJugadores.appendChild(li);
    });
}

// Agregar un nuevo jugador
function agregarJugador() {
    const input = document.getElementById('nuevo-jugador');
    const nuevoJugador = input.value.trim();

    if (nuevoJugador !== "") {
        jugadores.push(nuevoJugador);
        input.value = "";
        mostrarJugadores();
    } else {
        alert("Por favor, escribe el nombre de un jugador.");
    }
}

// Inicializar la lista al cargar la página
document.addEventListener('DOMContentLoaded', mostrarJugadores);
