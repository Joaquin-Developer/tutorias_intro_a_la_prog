class Persona {

    constructor(nombre, apellido, fechaNacimiento, sexo, añoIngreso) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.sexo = sexo;
        this.añoIngreso = añoIngreso;
    }

    toString() {
        return `<b>Nombre:</b> ${this.nombre} ${this.apellido} <br>
            <b>Sexo:</b> ${this.sexo} <br>
            <b>Año de ingreso:</b> ${this.añoIngreso}`;
    }

}