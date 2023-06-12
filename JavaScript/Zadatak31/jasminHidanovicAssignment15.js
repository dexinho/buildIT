// Napisati funkciju koja dijeli jedan cijeli broj drugim. Funkcija vraća objekat sa dva
// propertija - rezultat, ostatak. Za dijeljenje sa nulom vratiti objekat sa propertijem
// upozorenje koji ima vrijednost "Ne dijeli se sa nulom". Operatori koji smijete koristiti
// su + i -.

const podijeliDvaBroja = (prviBroj, drugiBroj) => {

    let rezultat = 0

    if (drugiBroj === 0)
        return 'Ne dijeli se sa nulom'

    while (prviBroj > drugiBroj) {
        for (let i = 0; i < drugiBroj; i++) {
            prviBroj -= 1
        }
        rezultat += 1
    }

    const objekatSaRezultatomIOstatkom = {}
    objekatSaRezultatomIOstatkom.rezultat = rezultat
    objekatSaRezultatomIOstatkom.ostatak = prviBroj

    return objekatSaRezultatomIOstatkom
}

console.log(podijeliDvaBroja(24, 5))
console.log(podijeliDvaBroja(29, 3))