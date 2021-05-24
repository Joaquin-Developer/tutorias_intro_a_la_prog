// ejercicio 3:

function modifyElement(array, index, newValue) {
    array[index] = newValue;
}

let arr = [1, 2, 3];
console.log(arr.toString());    // "1,2,3"

modifyElement(arr, 1, 5);

console.log(arr.toString());

// EJERCICIO 4

function printReverse(array) {

    for (let i = (array.length - 1); i >= 0; i--) {
        console.log(array[i]);
    }
}

printReverse([1, 2, 3, 4, 5, 6]);       // length = 6
