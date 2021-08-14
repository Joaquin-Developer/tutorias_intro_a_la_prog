
const btnEnviar = document.getElementById("btnEnviar");

const buttonEventHandler = (event) => {
    event.preventDefault();
    alert("Formulario enviado...");

}

btnEnviar.addEventListener("click", buttonEventHandler, { once: true });

function loadEventHandler() {
    console.log("Hola");
}

addEventListener("load", (event) => {
    setInterval(loadEventHandler, 2000);
})
