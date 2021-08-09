// Realizamos la petición y guardamos la promesa
const request1 = fetch("http://localhost:5000/get_persons");

// Al ser una Promise, llamamos al metodo then()
request1
.then(response => response.json())
// este primer then vuelve a retornar otra promesa del json
.then(jsonData => console.log(jsonData))
// aquí finalmente obtenemos el json que nos dió el servidor
.catch(err => console.error(err))


// otro ejemplo:



const request2 = fetch("http://localhost:5000/insert_person", {
    method: "POST",     // método
    mode: "cors",    // política de cors
    // cabecera de la petición
    headers: {
        "Content-Type": "application/json"
    },
    // en el body, los datos a enviar
    body: JSON.stringify({ name: "Juan Rodríguez", age: 40 })
})

request2
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.error(err))
