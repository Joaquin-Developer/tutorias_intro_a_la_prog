
// Callbacks:

function uno(callback) {
    setTimeout(function() {
        console.log("Hola!");
        callback();
    }, 3000)
}

function dos() {
    console.log("Chau!");
}

/* uno(dos); */

// Promesas:

function hola() {
    return new Promise((resolve)=> {
        setTimeout(() => {
            resolve(console.log("Hola"))
        }, 3000)
    })
}

function chau() {
    console.log("Chau!")
}

// hola()
// .then(() => {
//     chau();
// })
// .catch(error => console.error(error))


// Con función asíncrona:

function a() {
    return new Promise((resolve)=> {
        setTimeout(() => {
            resolve(console.log("Hola!"))
        }, 3000)
    })
}

function b() {
    console.log("Chau!");
}

async function ejecutar() {
    await a();
    b();
}
ejecutar()
