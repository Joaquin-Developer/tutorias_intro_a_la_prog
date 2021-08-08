const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Datos obtenidos del servidor. (Promesa 1)");
    }, 3000)

    setTimeout(() => {
        reject("Error: NO se pudieron obtener lo datos (Promesa 1)")
    }, 1000)

});

async function obtenerDatos() {
    try {
        const data = await promise;
        console.log(data);
    } catch (error) {
        console.error(error);
    }
} 

obtenerDatos();

