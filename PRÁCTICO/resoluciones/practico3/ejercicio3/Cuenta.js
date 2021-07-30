class Cuenta {

    constructor(titular, saldo, tope) {
        this.titular = titular;
        this.saldo = saldo;
        this.tope = tope;
    }
    
    ingresar(monto) {
        if (this.saldo + monto > this.tope) {
            alert("Error: No puede superar el tope de la cuenta");
        } else {
            this.saldo += monto;
            alert(`Se ingrsaron $ ${monto} a su cuenta`);
            alert(`Saldo actual: $ ${this.saldo}`);
        }
    }

    retirar(monto) {
        if (monto > this.saldo) {
            alert("Error: Saldo insuficiente");
        } else {
            this.saldo -= monto;
            alert(`Se retiraron $ ${monto} de su cuenta`);
            alert(`Saldo actual: $ ${this.saldo}`);
        }
    }

}
