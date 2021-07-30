
const retirar = (cuenta)=> {
    let monto = parseInt(prompt("Ingrese monto a retirar"));
    cuenta.retirar(monto);
}

const ingresar = (cuenta)=> {
    let monto = parseInt(prompt("Ingrese monto a ingresar"));
    cuenta.ingresar(monto);
}

const menu = () => {
    const nombre = prompt("Ingrese su nombre");
    const apellido = prompt("Ingrese su apellido");
    const fechaIngreso = new Date().toLocaleString();

    const cuenta = new Cuenta(
        new Cliente(nombre, apellido, fechaIngreso),
        1000,  // por defecto pongamos un saldo de 1000
        2500   // por defecto pongamos un tope de 2500
    );

    alert("Qué desea hacer? (1). Retiro | (2). Ingreso")
    let entrada = parseInt(prompt("elegir una opción"));
    
    if (entrada == 1) retirar(cuenta);
    else if (entrada == 2) ingresar(cuenta);
}

menu();