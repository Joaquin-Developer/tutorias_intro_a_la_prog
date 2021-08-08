/**
 * Otro ejemplo de promesas
 */

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Datos obtenidos del servidor. (Promesa 1)");
    }, 3000)

    setTimeout(() => {
        reject("Error: NO se pudieron obtener lo datos (Promesa 1)")
    }, 2000)

});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Datos obtenidos del servidor... (Promesa 2)");
    }, 3000)

    setTimeout(() => {
        reject("Error: NO se pudieron obtener lo datos (Promesa 2)")
    }, 4000)

});

promise1
.then(data => console.log(data))
.catch(error => console.error(error))

promise2
.then(data => console.log(data))
.catch(error => console.error(error))

