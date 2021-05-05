
function promedio(nota1, nota2, nota3) {
    const promedio = (nota1 + nota2 + nota3) / 3;

    if (promedio > 7) {
        alert("EXONERADO!");
    } else if (promedio >= 4) {
        alert("Examen DICIEMBRE");
    } else {
        alert("Examen FEBRERO");
    }

}

const nota1 = parseInt(prompt("Ingresar primer nota:"));
const nota2 = parseInt(prompt("Ingresar segunda nota:"));
const nota3 = parseInt(prompt("Ingresar tercer nota:"));

if (nota1 <= 12) {
    if (nota2 <= 12) {
        if (nota3 <= 12) {
            // las tres notas son validas
            promedio(nota1, nota2, nota3);
        } else {
            alert("La nota 3 no es valida");
        }
    } else {
        alert("La nota 2 no es valida");
    }
} else {
    alert("La nota 1 no es valida");
}

function condicionEstudiante(faltas) {
    if (faltas < 25) alert("REGLAMENTADO");
    else alert("LIBRE");
}

const faltas = parseInt(prompt("Ingresar numero de faltas"));
condicionEstudiante(faltas);
