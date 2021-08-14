
const boton = document.getElementById("btnSuma");
const divResultado = document.getElementsByClassName("resultado")[0];
const inputA = document.getElementById("numeroA");
const inputB = document.getElementById("numeroB");

function suma(a, b) {
    if ((typeof a == "number" && typeof b == "number") && !(isNaN(a) || isNaN(b)))
        return a + b;
    throw TypeError("Debe ingresar números!");

}

boton.addEventListener("click", () => {
    try {
        let resultado = suma(parseInt(inputA.value), parseInt(inputB.value));
        divResultado.innerHTML = `Resultado: ${resultado}`;
        
    } catch (error) {
        console.error(error);
        alert(error.message);
    }

})

