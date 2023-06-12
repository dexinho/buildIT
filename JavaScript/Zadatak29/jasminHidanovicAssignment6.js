// Kreirajte JavaScript funkciju koja provjerava da li su dva stringa
// anagrami jedan drugome. Anagram je riječ ili fraza koja se formira
// reorganizacijom slova druge riječi ili fraze. Funkcija uzima dva stringa
// kao parametre i treba da vrati boolean kao rezultat.

function anagrami(prviString, drugiString) {

    const prviNiz = []
    const drugiNiz = []

    for (const slovo of prviString.toLowerCase()){
        if (slovo >= 'a' && slovo <= 'z')
            prviNiz.push(slovo)
    }

    for (const slovo of drugiString.toLowerCase()){
        if (slovo >= 'a' && slovo <= 'z')
            drugiNiz.push(slovo)
    }

    return prviNiz.sort().join('') === drugiNiz.sort().join('')
}

console.log(anagrami('William Shakespeare!', "I'll make a wise phrase."))
console.log(anagrami('ovo je anagram', "anagram ovo je"))
console.log(anagrami('ovo vala nije anagram', "nije nikako"))

