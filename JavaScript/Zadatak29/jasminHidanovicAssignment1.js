// Napišite JavaScript funkciju koja uzima string kao parametar i određuje
// da li je taj string palindrom (čita se isto i naprijed i unazad). Funkcija
// treba da vrati boolean. Testirajte funkciju sa različitim stringovima kako
// biste provjerili njenu ispravnost.

const palindrom = (nekiString) => {

    let palindromTest = []
    for (const slovo of nekiString.toLowerCase())
        if (slovo >= 'a' && slovo <= 'z')
            palindromTest.push(slovo)

    return palindromTest.join('') === palindromTest.reverse().join('')
}

console.log(palindrom('Ana voli milovana!'))
console.log(palindrom('Jasmin odlicno drzi predavanja'))