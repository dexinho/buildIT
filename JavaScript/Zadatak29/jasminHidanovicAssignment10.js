// Napišite JavaScript funkciju koja rješava problem promjene novčića. Za
// dati ciljni iznos i skup novčića, odredite minimalni broj novčića
// potrebnih da se dostigne ciljani iznos. Funkcija uzima ciljani iznos i niz
// raspoloživih vrijednosti novčića kao parametre, a treba da vrati niz
// minimalni broj novčića kao rezultat. Testirajte funkciju sa različitim
// ciljanim iznosima i vrijednostima novčića.

function promjenaNovcica(ciljaniIznos, raspoloziveVrijednostiNovcica){

    const minimalniNizNovcica = []
    let cilj = ciljaniIznos

    // Krenemo od najveceg novcica i postavljamo uslov sve dok ne dodjemo do ciljanog iznosa
    for (let i = raspoloziveVrijednostiNovcica.length - 1; i>=0; i--) {
        while (ciljaniIznos >= raspoloziveVrijednostiNovcica[i]) {
            minimalniNizNovcica.push(raspoloziveVrijednostiNovcica[i])
            ciljaniIznos -= raspoloziveVrijednostiNovcica[i]
        }
    }

    if (minimalniNizNovcica.reduce((sum, elem) => sum + elem) === cilj)
        return minimalniNizNovcica
    else 
        return `Nemoguce je napraviti ${cilj} sa ovim novcicima`
}

console.log(promjenaNovcica(23, [1,2,5]))
console.log(promjenaNovcica(36, [1,2,10]))
console.log(promjenaNovcica(103, [2,5,10]))