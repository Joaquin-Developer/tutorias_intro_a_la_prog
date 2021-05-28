class Profesor extends Persona {

    constructor(nombre, apellido, fechaNacimiento, sexo, añoIngreso, cursosDictados, materias) {
        super(nombre, apellido, fechaNacimiento, sexo, añoIngreso);
        this.cursosDictados = cursosDictados;
        this.materias = materias;
    }

}