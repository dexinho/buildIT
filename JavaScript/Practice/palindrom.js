// Napišite funkciju koja provjerava je li zadani string palindrom, tj. čita li se isto i s lijeva na desno i s desna na lijevo.

function palindrom(zadaniString) {
    if (zadaniString.split('').reverse().join('') === zadaniString)
        return console.log(`Rijec ${zadaniString} je palindrom`)
    else
        return console.log(`Rijec ${zadaniString} nije palindrom`)

}

palindrom('ana voli milovana')