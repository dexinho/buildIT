// Napišite funkciju koja uzima broj kao ulaz i okreće njegove cifre
// koristeći petlju. Na primjer, ako je ulaz 123, funkcija treba vratiti 321.

function okreniCifre(nekiBroj) {

    let obrnuteCifre = ''
    
    for (let i = nekiBroj.toString().length - 1; i >= 0; i--)
        obrnuteCifre += nekiBroj.toString()[i]

    return Number(obrnuteCifre)
}

console.log(okreniCifre(123))
console.log(okreniCifre(9812))