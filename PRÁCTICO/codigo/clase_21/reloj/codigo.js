
const divReloj = document.getElementsByClassName("reloj")[0];


setInterval(() => divReloj.innerHTML = new Date().toLocaleTimeString(), 1000)


// addEventListener('load', (e) => {

//     setTimeout(mostrarMensaje, 5000);
// })

// const mostrarMensaje = ()=> alert("Bienvenido/a");


// let timer = setTimeout(mostrarMensaje, 5000);

// function detenerTimer() {
//     clearTimeout(timer);
// }

