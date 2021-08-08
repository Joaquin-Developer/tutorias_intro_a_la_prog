
// >

function suma(a, b) {
    if (typeof a === "number" && typeof b === "number") 
        return a + b;
    
    throw TypeError("Debe ingresar numeros!")
}


button.addEventListener("click", (evt)=> {
    try {
        let a = document.getElementById("num_a").value;
        let b = document.getElementById("num_b").value;
        let resultado = suma(a, b);
        divResultado.innerHTML = `Resultado: ${resultado} `

    } catch (error) {
        console.error(error);
        alert(error.message);
    }

})


