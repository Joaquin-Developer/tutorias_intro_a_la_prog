
const boton = document.getElementById('btnEnviar');

boton.addEventListener('click', (evt) => {
    evt.preventDefault();
    console.log("Este mensaje no se volverá a mostrar :)");
}, { once: true });

