// Napraviti funkciju koja pretvara arapski uneseni broj u rimski. Ograničiti brojeve koji
// smiju biti uneseni u interval od 1 do 3999.

const pretvaramURimske = arapskiBroj => {

    const cijeliRimskiBrojevi = [{'V': 5, 'I': 1}, {'L': 50, 'X': 10}, {'D': 500, 'C': 100}, {'M': 1000}]
    const odredjeniRimskiBrojevi = [{'IV': 4, 'IX': 9}, {'XL': 40, 'XC': 90}, {'CD': 400, 'CM': 900}]
    const nizPretvorenihBrojeva = []

    let pretovreniBroj = ''
    let mnozilac = 1
    let arapskiBrojString = String(arapskiBroj)

    if (arapskiBroj < 1 || arapskiBroj > 3999)
        return 'Unesite broj od 1 do 3999'

    for (let i = 0; i < arapskiBrojString.length; i++) {
        let cifra = Number(arapskiBrojString[arapskiBrojString.length - 1 - i]) * mnozilac
        for (const rimskiSimbol in odredjeniRimskiBrojevi[i]) {
            if (cifra === odredjeniRimskiBrojevi[i][rimskiSimbol]) {
                cifra -= odredjeniRimskiBrojevi[i][rimskiSimbol]
                pretovreniBroj += rimskiSimbol
            }
        }
        for (const rimskiSimbol in cijeliRimskiBrojevi[i]) {
            while (cifra >= cijeliRimskiBrojevi[i][rimskiSimbol]) {
                cifra -= cijeliRimskiBrojevi[i][rimskiSimbol]
                pretovreniBroj += rimskiSimbol
            }
        }
        nizPretvorenihBrojeva.unshift(pretovreniBroj)
        pretovreniBroj = ''
        mnozilac *= 10
    }

    return nizPretvorenihBrojeva.join('')
}

console.log(pretvaramURimske(95)) //-> “XCV”
console.log(pretvaramURimske(8)) // -> “VIII”
console.log(pretvaramURimske(1025)) // -> “MXXV”