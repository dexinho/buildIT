// Razvijte JavaScript funkciju koja uzima string i broj kao parametre.
// Funkcija treba ponoviti string određeni broj puta, te ga sastaviti u novi
// string koji funkcija treba da vrati.

function ponoviString(nekiString, brojPonavljanja) {
    
    let ponovljeniString = ''

    for (let i = 0; i < brojPonavljanja; i++) {
        console.log(nekiString)
        ponovljeniString += nekiString
    }

    return ponovljeniString
}

console.log(ponoviString('Dino je legenda i samo se smije', 5))