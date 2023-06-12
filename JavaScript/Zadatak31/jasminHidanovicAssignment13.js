// Napišite funkciju koja prima dva niza i vraća niz presjeka i niz unije.
// Niz presjeka: Elementi koji se dijele između oba niza.
// Niz unije: Elementi koji postoje iskljucivo u prvom, iskljucivo u drugom nizu, ili u oba
// niza.
// Iako ulazni nizovi mogu sadržavati duplikate, vraćeni nizovi presjeka i unije trebaju
// biti unikatni - to jest, ne sadrže duplicirane elemente. Vraćeni nizovi trebaju biti
// sortirani u uzlaznom redoslijedu.

/* PRIMJER:
Array 1: [5, 6, 6, 6, 8, 9]
Array 2: [3, 3, 4, 4, 5, 5, 8]
Intersection: [5, 8]
// 5 and 8 are the only 2 numbers that exist in both arrays.
Union: [3, 4, 5, 6, 8, 9]
// Each number exists in at least one array. */

function nizPresjekaIUnije(prviNiz, drugiNiz) {

    const filtriraniPrviNiz = prviNiz.filter((elem, index) => prviNiz.indexOf(elem) === index)
    const filtriraniDrugiNiz = drugiNiz.filter((elem, index) => drugiNiz.indexOf(elem) === index)

    const nizPresjeka = filtriraniPrviNiz.filter(elem => filtriraniDrugiNiz.includes(elem))
    const nizSortiraneUnijeSaDuplikatima = prviNiz.concat(drugiNiz).sort((a, b) => a - b)
    const nizUnijeBezDuplikata = nizSortiraneUnijeSaDuplikatima.filter((elem, index) => nizSortiraneUnijeSaDuplikatima.indexOf(elem) === index)

    return [nizPresjeka, nizUnijeBezDuplikata]

}

console.log(nizPresjekaIUnije([5, 6, 6, 6, 8, 9], [3, 3, 4, 4, 5, 5, 8]))