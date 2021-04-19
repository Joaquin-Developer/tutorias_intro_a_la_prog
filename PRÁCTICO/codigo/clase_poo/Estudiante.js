class Estudiante {

    /* Constructor de la clase */
    constructor(id, nombre, apellido, fechaNac, añoIngreso, carreras)
    {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNac = fechaNac;
        this.añoIngreso = añoIngreso;
        this.carreras = carreras;
    }
    /* Métodos: */

    agregarCarrera(carreraNueva) {
        this.carreras.push(carreraNueva);
    }

    generacionActual() {
        return this.añoIngreso === new Date().getFullYear();
    }

    obtenerCarreras() {
        return this.carreras.join().replace(",", ", ");
    }

    imprimirDatos() {
        document.write(`<strong>ID: </strong>${this.id}<br>
        <strong>Nombre: </strong>${this.nombre}<br>
        <strong>Apellido: </strong>${this.apellido} <br>
        <strong>Carreras que hace: </strong>${this.obtenerCarreras()} <hr>`);
    }

}