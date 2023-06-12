// Napišite JavaScript funkciju koja izračunava zbir svih brojeva u nizu.
// Iterirajte kroz niz i dodajte svaki broj u tekuću sumu. Prikazujte zbir kao
// rezultat.

const zbirSvihBrojevaUNizu = (nekiNiz) => {

    let suma = 0

    if (Array.isArray(nekiNiz) === false)
        return 'Niste unijeli niz'
    else    
        for (const broj of nekiNiz) {
            suma += broj
        }

    return suma
}

console.log(zbirSvihBrojevaUNizu([1,2,5,7,10]))
console.log(zbirSvihBrojevaUNizu([99, 99, 101, 101]))
console.log(zbirSvihBrojevaUNizu('ovo kao sto svi znamo nije niz, ali mozda i jeste'))