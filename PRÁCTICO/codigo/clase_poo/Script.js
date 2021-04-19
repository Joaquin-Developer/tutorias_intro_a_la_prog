// Creo una instancia de la clase Estudiante:
const e1 = new Estudiante(101, "Juan", "Perez", new Date(), 2020, ["Ing. Computación"]);

// Muestro por consola el valor de retorno de llamar al método generacionActual() de mi objeto:
console.log(e1.generacionActual());

// llamo al mético agregarCarrera de mi objeto
e1.agregarCarrera("Lic. Matemáticas");

// llamo al metodo mosttar datos.
e1.imprimirDatos()

function esGenActual() {
    // Vuelvo a llamar al método generacionActual()
    if (e1.generacionActual()) {
        console.log(`${e1.nombre} ${e1.apellido} es de la gen ${new Date().getFullYear()}`);
    } else {
        console.log(`${e1.nombre} ${e1.apellido} NO es de la gen ${new Date().getFullYear()}`);
    }
}

esGenActual();  // recordar que hasta este punto, e1.añoIngreso vale 2020.

// seteo pa propiedad añoIngreso de mi objeto:
e1.añoIngreso = 2021;

esGenActual()

