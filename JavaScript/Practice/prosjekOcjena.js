// Napišite funkciju koja prima objekt s ocjenama studenta i vraća prosjek svih ocjena.

const prosjekOcjena = (ocjene) => {
    let suma = 0

    for (const key in ocjene) {
        suma += ocjene[key]
    }

    return suma/Object.keys(ocjene).length

}

console.log(prosjekOcjena(
    {
    matematika: 4,
    engleski: 5,
    povijest: 3,
    kemija: 4 }))