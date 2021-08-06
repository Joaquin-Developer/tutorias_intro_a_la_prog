
/**
 * Ej 1: Eliminar el cuadro amarillo con la alerta
 */
const removeAlert = () => {
    let container = document.getElementsByClassName('container')[1]
    let alertElement = document.getElementsByClassName("alert-warning")[0]
    container.removeChild(alertElement);    
}

/**
 * Ej2: Modificar el label "Nombre del Cliente", para 
 * que diga "Nombre y Apellido del cliente"
 */
const modifyLabelNameClient = ()=> {
    let formElements = getFormChilds()
    let label = formElements[1].children[0]

    label.textContent = "Nombre y Apellido del cliente";
}

const getFormChilds = () => document.getElementById('form_nueva_venta').children[0].children

const getForm = () => document.getElementById('form_nueva_venta')

/**
 * Ej3. Nodificar el tipo del input precio, de "text" a "number"
 */
const modifyPriceInput = () => {

    document.getElementById("inputPrice").type = "number";

    // const form = getFormChilds();
    // let inputPrice = form[3].children[1];
    // inputPrice.type = "number";
}

/**
 * Ej4. agregar un input y un label para indicar el Subtotal de la venta
 * Agregarlo justo debajo del input de precio
 */

const insertInputSubtotal = () => {
    const form = getForm();
    let formFieldset = form.children[0];
    let formGroupTotalPrice = formFieldset.children[3]
    // create a new div:
    let divFormGroup = document.createElement("div");
    divFormGroup.classList.add("form-group");
    // create a label:
    let labelSubTotal = document.createElement("label");
    labelSubTotal.classList.add("form-label", "mt-4");
    labelSubTotal.appendChild(document.createTextNode("Sub Total:"));
    // create a new input:
    let inputSubTotal = document.createElement("input");
    inputSubTotal.type = "number";
    inputSubTotal.id = "inputSubTotal";
    inputSubTotal.classList.add("form-control")
    // append childs:
    divFormGroup.appendChild(labelSubTotal)
    divFormGroup.appendChild(inputSubTotal)

    formFieldset.insertBefore(divFormGroup, formGroupTotalPrice);
}

/**
 * Ej5. Agregar un boton que diga "Limpiar", detras del boton de guardar venta
 */

const insertCearButton = () => {
    const form = getForm();
    const clearButton = document.createElement("button");
    clearButton.appendChild(document.createTextNode("LIMPIAR"));
    clearButton.style.color = "red";

    form.appendChild(clearButton);
    
}


