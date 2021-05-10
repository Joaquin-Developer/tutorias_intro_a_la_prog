const gato = {
    nombre: "Tom",
    edad: 3,
    color: "white",
    vacunasAlDia: false,
    maullar: () => {
        console.log("MIAU")
    },
    pedirComida: () => {
        console.log("miauuuuu miauuuu");
    },
    comidasFavoritas: ["Sushi", "Carne", "Arroz"]
}


const estudiantes = [
    {
        nombre: "Antonio Perez",
        cursos: ["Ingeniería", "Intro a la Prog"],
        solicitarEntrevista: function() {
            console.log("Solicitud enviada...")
        }
    },
    {
        nombre: "Ana Barrios",
        cursos: ["Arquitectura", "Curso de Excel"],
        solicitarEntrevista: function() {
            console.log("Solicitud enviada...")
        }
    },
    {
        nombre: "Jose Rodríguez",
        cursos: [],
        solicitarEntrevista: function() {
            console.log("Solicitud enviada...")
        }
    }
];

/**
 * funciones del ejercicio realizado en clase
 * con respecto al objeto estudiantes:
 */

function cantidadDeCursos() {
    for (const e of estudiantes) {
        const total = e.cursos.length;
        console.log("El estudiante " + e.nombre + " cursa " + total + " cursos");
    }
}

function pedirEntrevistaEstudiantesSinCursos()
{
    for(const e of estudiantes) {
        if (e.cursos.length == 0) {
            console.log("Solicitando entrevista a " + e.nombre);
            e.solicitarEntrevista();
        }
    }
}
