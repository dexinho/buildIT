// Implementirati funkciju forEach.

function forEach(callback, arr) {

    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr)
    }

}

forEach([5, 11, 99, 44, 16], (elem, index) => { console.log(elem, index) })

