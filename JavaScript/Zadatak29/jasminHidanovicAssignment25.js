// Napišite funkciju koja prihvata string kao ulaz i komprimuje ga
// zamjenom ponovljenih karaktera njihovim brojem. Na primjer, ulazni
// string "aaabbbcc" treba biti komprimiran u "a3b3c2". Ako komprimirani
// string nije kraći od originalnog stringa, funkcija treba vratiti originalni
// string.

const komprimujString = (nekiString) => {
    
    let brojac = 1
    let slovo = nekiString[0]
    let komprimiraniString = ''

    // Provjeravamo string sve dok se ista slova ne ponove
    for (let i = 1; i < nekiString.length; i++) {
        if (nekiString[i] === slovo)
            brojac++
        else {
            komprimiraniString = komprimiraniString + slovo + brojac
            slovo = nekiString[i]
            brojac = 1  
        } 
    }

    // Dodatni += koristimo jer zadnje slovo u vize 'for' petlji nece dodati u konacni string
    if (komprimiraniString.length < nekiString.length)
        return komprimiraniString += slovo + brojac
    else
        return nekiString
}

console.log(komprimujString('aaabbbcc'))
console.log(komprimujString('aaaaaaaabbc'))
console.log(komprimujString('abc'))