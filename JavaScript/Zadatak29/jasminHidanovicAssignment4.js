// Napišite JavaScript funkciju koja uzima string kao parametar i
// preokreće ga. Funkcija treba da vrati preokrenuti string kao rezultat.
// Testirajte funkciju sa različitim stringovima kako biste osigurali da radi
// ispravno.

function preokreniString(nekiString) {

    return nekiString.split('').reverse().join('')
}

console.log(preokreniString('Sabira sve stigne prevesti sa engleskog na bosanski'))
console.log(preokreniString('small string'))