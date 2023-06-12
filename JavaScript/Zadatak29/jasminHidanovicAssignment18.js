// Razvijte JavaScript funkciju koja provjerava da li je dati broj godine
// prestupna godina. Implementirajte logiku za određivanje da li je godina
// djeljiva sa 4, ali nije djeljiva sa 100 osim ako je također djeljiva sa 400.
// Prikazujte rezultat kao izlaz.

function prestupneGodina(godina) {

    if (typeof godina !== 'number')
        return `${godina} nije godina`
    else
        return godina % 4 === 0 && godina % 100 !== 0 || godina % 400 === 0
}

console.log(prestupneGodina(2004))
console.log(prestupneGodina(1611))
console.log(prestupneGodina('using namespace std'))