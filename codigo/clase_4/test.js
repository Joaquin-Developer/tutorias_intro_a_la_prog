

function promedio(nota1, nota2, nota3) {
    const promedio = (nota1 + nota2 + nota3) / 3;

    if (promedio >= 8) {
        alert("EXONERADO");
    }
    else if (promedio >= 4) {
        alert("EXAMEN DICIEMBRE");
    } else {
        alert("EXAMEN FEBRERO");
    }
}

const nota1 = parseInt(prompt("Ingrese nota 1 :"))
const nota2 = parseInt(prompt("Ingrese nota 2 :"))
const nota3 = parseInt(prompt("Ingrese nota 3 :"))

if (nota1 <= 12) {
    if (nota2 <= 12) {
        if (nota3 <= 12) {
            promedio(nota1, nota2, nota3);
        } else {
            alert("ERROR: La nota 3 debe ser menor que 12");
        }
    } else {
        alert("ERROR: La nota 2 debe ser menor que 12");
    }
} else {
    alert("ERROR: La nota 1 debe ser menor que 12");
}


function condicionEstudiante(faltas) {
    if (faltas < 25)
        alert("Calidad: REGLAMENTADO");
    else
        alert("Calidad: LIBRE");
}

const faltas = parseInt(prompt("Ingrese sus inasistencias"));
condicionEstudiante(faltas);
