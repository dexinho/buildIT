// Implementirati funkciju reduceRight.

function reduceRight(arr, callback, pocetnaVrijednost) {

    
    if (typeof pocetnaVrijednost === 'undefined') {
        var rezultat = arr[arr.length - 1]
        var index = arr.length - 2
    }
    else {
        var rezultat = pocetnaVrijednost
        var index = arr.length - 1
    }

    for (index; index >= 0; index--) {
        rezultat = callback(rezultat, arr[index], index, arr)
    }

    return rezultat
}

const nadjiSumuElemenata = reduceRight([1, 2, 3], (sum, elem) => sum * elem, 0)

console.log(nadjiSumuElemenata)

