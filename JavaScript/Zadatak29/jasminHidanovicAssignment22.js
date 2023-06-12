// Napišite funkciju koja uzima string sa zagradama kao ulaz i određuje
// da li su zagrade balansirane. Funkcija treba vratiti true ako su zagrade
// balansirane (tj. svaka otvorena zagrada ima odgovarajuću zatvorenu
// zagradu) i false ukoliko nisu.

function balansiraneZagrade(nekiString) {

    const otvoreneZagrade = ['(', '[', '{']
    const zatvoreneZagrade = [')', ']', '}']
    let samoZagrade = nekiString.split('').filter((elem) => elem === '(' || elem === ')' || elem === '[' || elem === ']' || elem === '{' || elem === '}')
    const finalCheck = []
    
    // Ubacujemo otvorene zagrade u niz sve dok ne dodje zatvorena zagrada
    // tu zatvorenu zagradu, pomocu indexOf, poredimo da li je ista otvorenoj koja je .pop-ana
    for (const trenutnaZagrada of samoZagrade) {
        if (otvoreneZagrade.includes(trenutnaZagrada)) {
            finalCheck.push(trenutnaZagrada) 
        }
        else if (zatvoreneZagrade.includes(trenutnaZagrada)) {
            if (finalCheck.pop() !== otvoreneZagrade[zatvoreneZagrade.indexOf(trenutnaZagrada)])
                return false
        }
    }

    return true
}

console.log(balansiraneZagrade('([{}])'))
console.log(balansiraneZagrade('))['))
console.log(balansiraneZagrade('{hello((beautiful))[world]}'))