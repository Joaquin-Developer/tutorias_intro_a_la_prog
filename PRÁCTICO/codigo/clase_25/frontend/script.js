
function sendData(name, age) {
    
    fetch("http://localhost:5000/insert_person", {
        method: "POST",     // método
        mode: "cors",    // política de cors
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name, age: age })
    })
    .then(response => response.json()
    .then(json => console.log(json)))
    .catch(error => alert(error.message));
}

addEventListener("load", () => {
    fetch("http://localhost:5000/get_persons")
    .then(resp => resp.json())
    .then(data => {
        data.forEach(element => {
            console.log(element.name);
        });
    })
})


document.getElementById("sendInfo")
.addEventListener("click", (evt) => {
    evt.preventDefault();

    let name = document.getElementById("name").value
    let age = document.getElementById("age").value

    sendData(name, age);

})
