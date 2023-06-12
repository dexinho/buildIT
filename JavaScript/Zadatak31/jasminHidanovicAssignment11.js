// Implementirajte funkciju koja vraca najmanji element u nizu brojeva koristeci se
// funkcijom less definiranom ispod, i jednom od sljedecih funkcija: map, reduce, filter.

function less(a, b) {
return a < b ? a : b;
}

function reduce(arr, callback, pocetnaVrijednost) {

    if (typeof pocetnaVrijednost === 'undefined') {
        var rezultat = arr[0]
        var index = 1
    }
    else {
        var rezultat = pocetnaVrijednost
        var index = 0
    }

    for (index; index < arr.length; index++) {
        rezultat = callback(rezultat, arr[index], index, arr)
    }

    return rezultat
}

const nekiNiz = [5, 2, 7, 4, 10]

let najmanji = reduce(nekiNiz, (najmanji, elem) => {
    return less(najmanji, elem)
})

console.log(najmanji)
