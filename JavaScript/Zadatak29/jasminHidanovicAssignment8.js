// Razvijte JavaScript funkciju koja računa faktorijel datog broja. Faktorijel
// nenegativnog cijelog broja n je proizvod svih pozitivnih brojeva manjih
// ili jednakih n. Funkcija uzima broj kao parametar, a trba da vrati
// faktorijel tog broja kao izlaz. Testirajte funkciju sa različitim brojevima
// kako biste provjerili njenu tačnost.

function faktorijelDatogBroja(nekiBroj) {

    if (nekiBroj < 0)
        return "Broj mora biti nenegativan cijeli broj"
    else if (nekiBroj === 0)
        return 1
    else
        return faktorijelDatogBroja(nekiBroj - 1) * nekiBroj
}

console.log(faktorijelDatogBroja(4))
console.log(faktorijelDatogBroja(6))
console.log(faktorijelDatogBroja(-1.25))