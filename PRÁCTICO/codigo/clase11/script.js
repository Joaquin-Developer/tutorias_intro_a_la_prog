let estudiantes = [];

for (let i = 0; i < 3; i++) {

    const nombre = prompt("Ingrese nombre del estududiante " + (i + 1));
    const carrera = prompt("Ingrese la carrera del estududiante " + (i + 1));
    const aprobadas = parseInt(prompt("Cantidas de aprobadas del estududiante " + (i + 1)));
    const reprobadas = parseInt(prompt("Cantidas de reprobadas del estududiante " + (i + 1)));

    estudiantes.push({
        nombreEstudiante: nombre,
        carrera: carrera,
        totalAprobadas: aprobadas,
        totalReprobadas: reprobadas
    });
    
}

// ahora recorreremos el array asociativo para mostrar cada elemento:
for (let alumno of estudiantes) {
    const salida = "Nombre: " + alumno.nombreEstudiante
        + ", Carrera: " + alumno.carrera
        + ", aprobadas: " + alumno.totalAprobadas
        + ", reprobadas: " + alumno.totalReprobadas;

    alert(salida);
}
