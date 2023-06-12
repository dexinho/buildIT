// Napraviti funkciju koja prima 2 parametra, uzlazno sortirani niz i broj. Funkcija treba
// da vrati index broja u sortiranom nizu. Ukoliko broj ne postoji u nizu funkcija treba da
// vrati index na kojem bi se taj broj nalazio da je u nizu.

// function indexiram(nizSortiranihBrojeva, broj) {

//     const nizSaUbacenimBrojem = []

//     if (nizSortiranihBrojeva.indexOf(broj) !== -1)
//         return nizSortiranihBrojeva.indexOf(broj)
//     else {
//         for (let i = 0; i < nizSortiranihBrojeva.length; i++) {
//             if (nizSortiranihBrojeva[i] < broj) {
//                 nizSaUbacenimBrojem.push(nizSortiranihBrojeva[i])
//             }
//             else return nizSaUbacenimBrojem.length
//         }
//     }

//     return nizSortiranihBrojeva.length
// }

function indexiram(nizSortiranihBrojeva, broj) {

    let manjiBroj = broj - 1

    if (nizSortiranihBrojeva.indexOf(broj) !== -1)
        return nizSortiranihBrojeva.indexOf(broj)
    else {
        while (manjiBroj >= nizSortiranihBrojeva[0]) {
            if (nizSortiranihBrojeva.includes(manjiBroj))
                return nizSortiranihBrojeva.indexOf(manjiBroj) + 1
            else
                manjiBroj--
        }
    }

    return nizSortiranihBrojeva.length
}


console.log(indexiram([1, 3, 5, 6, 9], 5)) // -> 2
console.log(indexiram([1, 3, 5, 6, 9], 7)) // -> 4
console.log(indexiram([1, 3, 5, 6, 9], 2)) // -> 1
console.log(indexiram([1, 3, 5, 6, 9], 11)) // -> 5