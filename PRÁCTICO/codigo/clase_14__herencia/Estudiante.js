class Estudiante extends Persona {

    constructor(nombre, apellido, fechaNacimiento, sexo, añoIngreso, nombreCarrera, creditos) {
        super(nombre, apellido, fechaNacimiento, sexo, añoIngreso);
        this.nombreCarrera = nombreCarrera;
        this.creditos = creditos;
    }

    matricularse() {
        return null;
    }

}