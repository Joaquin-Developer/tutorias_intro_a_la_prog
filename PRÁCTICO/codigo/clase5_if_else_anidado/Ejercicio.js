//<>

function analizarNumero(numero) {
    if (numero > 0) {
        alert("El número es positivo");
    } else if (numero == 0) {
        alert("El número es cero");
    } else {
        alert("El número es negativo");
    }
}

const num = parseInt(prompt("Ingrese un numero"));
analizarNumero(num);
