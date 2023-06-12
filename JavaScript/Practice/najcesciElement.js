// Napišite funkciju koja pronalazi najčešći element u zadatom array-u i vraća taj element. Koristi objekte za storiranje podataka.

'use strict'

function najcesciElement(arr) {
    let najcesciElement = arr[0]
    let ponavljanje = 0
    const storiraniElementi = {}

    for (const elem of arr) {
        if (storiraniElementi.hasOwnProperty(elem))
            storiraniElementi[elem]++
        else
            storiraniElementi[elem] = 1

        if (storiraniElementi[elem] > ponavljanje) {
            najcesciElement = elem
            ponavljanje = storiraniElementi[elem] }
    }

    // for (const key in storiraniElementi)
    //     if (storiraniElementi[key] > ponavljanje) {
    //         najcesciElement = key
    //         ponavljanje = storiraniElementi[key] }

    console.log(storiraniElementi)
    
    return `najcesci element je: ${najcesciElement} i ponavlja se ${ponavljanje} puta`
}

console.log(najcesciElement([1,2,1,1,4,5,5,5,5,5,5]))