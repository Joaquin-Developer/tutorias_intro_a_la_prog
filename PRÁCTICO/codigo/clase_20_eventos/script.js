const button = document.getElementById("btnSend");

button.addEventListener("mouseout", () => {
    console.log("Cursor sale del boton");
})

button.addEventListener("mouseover", () => {
    console.log("Cursor entra al boton");
})

document.getElementById("mail").addEventListener("focus", () => {
    console.log("Obtuve el foco")
})


button.addEventListener("click", (evt) => {
    evt.preventDefault();
    alert("Formulario enviado");
})
