// Implementirati funkciju filter.

function filter(arr, callback) {

    const filtriraniArr = []

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr))
            filtriraniArr.push(arr[i])
    }

    return filtriraniArr
}

const neparniBrojevi = filter([1, 4, 6, 7, 4], (elem, index) => elem % 2 === 1)

console.log(neparniBrojevi)

