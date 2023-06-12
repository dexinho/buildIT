// Napišite JavaScript funkciju koja uzima string kao parametar i broji
// frekvenciju svake riječi u tom stringu. Spremite frekvencije riječi u
// objekt i prikažite rezultat.

function brojRijeciUStringu(nekiString) {
    
    const frekvencijaRijeci = {}
    const samoMalaSlovaIRazmaci = []

    // Ostavljamo samo slova i razmake kako bi lakse prebrojali rijeci
    for (const char of nekiString.toLowerCase())
        if (char >= 'a' && char <= 'z' || char === ' ')
            samoMalaSlovaIRazmaci.push(char)

    // Prolazimo kroz array i u zavisnosti od uslova, kreiramo ili povecavamo property za 1
    for(const rijec of samoMalaSlovaIRazmaci.join('').split(' ')) {
        if (frekvencijaRijeci.hasOwnProperty(rijec))
            frekvencijaRijeci[rijec] += 1
        else
            frekvencijaRijeci[rijec] = 1
    }

    return frekvencijaRijeci
}

console.log(brojRijeciUStringu('jedan, dVa, Jedan!, tri, jedan, DVA!!!'))
console.log(brojRijeciUStringu('da da ne ne mozda mozda ipak ipak'))