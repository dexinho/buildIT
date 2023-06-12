// Kreirajte JavaScript funkciju u koja generiše nasumičan broj, a korisnik
// mora pogoditi taj broj. Pružite povratnu informaciju korisniku nakon
// svakog pokušaja, ukazujući da li je broj prevelik, premalen ili tačan.
// Funkcija uzima broj kao parametar, a vraća string koji govori koliko je
// taj broj “udaljen” od generisanog broja.

const pogoditeNasumicanBroj = (pokusaj) => {
    
    let randomBroj = Math.floor(Math.random() * 11)

    if (typeof pokusaj !== 'number')
        return 'Niste unijeli broj od 0 do 10'
    else if (pokusaj < 0 || pokusaj > 10)
        return 'Vas broj treba da bude izmedju 0 i 10'
    else if (pokusaj === randomBroj)
        return `Cestitamo! Pogodili ste da se radi o broju ${randomBroj}!`
    else if (pokusaj > randomBroj)
        return `Vise srece drugi put! Vas broj ${pokusaj} je veci za ${pokusaj - randomBroj}`
    else
        return `Vise srece drugi put! Vas broj ${pokusaj} je manji za ${randomBroj - pokusaj}`
}

console.log(pogoditeNasumicanBroj(5))
console.log(pogoditeNasumicanBroj(2))
console.log(pogoditeNasumicanBroj(20))
console.log(pogoditeNasumicanBroj('nije string'))