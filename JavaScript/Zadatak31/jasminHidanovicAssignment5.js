// Implementirati funkciju some.

function some(arr, callback) {

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr))
            return true
    }

    return false
}

const nalaziLiSeBroj3 = some([1, 2, 3, 4], (elem) => elem === 3)
console.log(nalaziLiSeBroj3)
