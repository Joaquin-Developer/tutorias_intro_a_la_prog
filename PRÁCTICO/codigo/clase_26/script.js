
addEventListener("load", async () => {
    const data = await getData();
    showData(data);
})

const getData = async ()=> {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await data.json();
    return json;
}

const showData = (data) => {
    // Show data in table
    const tbody = document.getElementById("tbody");
    
    data.forEach(user => {
        const tr = document.createElement("tr");
        const tdId = document.createElement("td")
        const tdName = document.createElement("td")
        const tdUser = document.createElement("td")
        const tdCity = document.createElement("td")
        const tdWebsite = document.createElement("td")
        tdId.appendChild(document.createTextNode(user.id));
        tdName.appendChild(document.createTextNode(user.name))
        tdUser.appendChild(document.createTextNode(user.username))
        tdCity.appendChild(document.createTextNode(user.address.city))
        tdWebsite.appendChild(document.createTextNode(user.website))

        tr.appendChild(tdId)
        tr.appendChild(tdName)
        tr.appendChild(tdUser)
        tr.appendChild(tdCity)
        tr.appendChild(tdWebsite)

        tbody.appendChild(tr);
    });

    
}

