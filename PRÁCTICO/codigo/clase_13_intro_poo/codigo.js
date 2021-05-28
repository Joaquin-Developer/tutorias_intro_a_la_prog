
const miPerro = new Perro();
miPerro.nombre = prompt("Ingresar nombre del perro");
miPerro.color = prompt("Ingresar color del perro");
miPerro.hambriento = false;

if (! miPerro.hambriento) {
    // si no esta hambriento, moverá la cola
    miPerro.moverLaCola()
}
