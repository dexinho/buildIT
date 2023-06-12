// Napišite JavaScript funkciju koja broji broj samoglasnika u datom
// stringu. Funkcija uzima string kao parametar, a treba da vrati niz broj
// samoglasnika kao rezultat.

function brojSamoglasnika (nekiString) {

    if (typeof nekiString !== 'string')
        return 'Niste unijeli string'
    else
        return `U stringu ${nekiString} se nalazi ${
            nekiString.toLowerCase()
            .split('')
            .filter((elem) => {
                if (elem === 'a' || elem === 'e' || elem === 'i' || elem === 'o' || elem === 'u')
                    return true
                else 
                    return false
            }).length} samoglasnika`
}

console.log(brojSamoglasnika('JAVASCRIPT is a fun programming language!'))
console.log(brojSamoglasnika('lakse prebrojati'))
console.log(brojSamoglasnika(123))