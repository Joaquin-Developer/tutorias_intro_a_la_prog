const button = document.getElementById('btnSend');

button.addEventListener('mouseout', () => {
    console.log("cursor sale")
})

button.addEventListener('mouseover', ()=> {
    console.log("cursor entra")
})

/**
 * Prevent default
 */
button.addEventListener('click', (event)=> {
    event.preventDefault();
    console.log("Formulario enviado");
})
