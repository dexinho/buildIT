// Permutacije stringa: Napišite funkciju koja uzima string kao ulaz i vraća
// niz koji sadrži sve moguće permutacije karaktera u stringu. Svaka
// permutacija treba biti predstavljena kao jedinstveni string. Na primjer,
// ako je ulaz "abc", rezultat treba biti ["abc", "acb", "bac", "bca", "cab",
// "cba"].

const permutacijeStringa = (nekiString) => {

    const kombinacijeStringova = []
    let jednaKombinacija = ''
    let brojKombinacija = 1

    for (let i = 0; i < nekiString.length; i++) 
        brojKombinacija *= nekiString.length - i

    // sve dok se ne popuni array, testiraju se random kombinacije dok ne nadju one koje fale
    while (kombinacijeStringova.length < brojKombinacija) {
        for (let i = nekiString.length - 1; i >= 0; i--) {
          const randomIndex = Math.floor(Math.random() * nekiString.length)
          jednaKombinacija += nekiString[randomIndex]
        }
        if (nekiString.split('').every((elem) => jednaKombinacija.split('').includes(elem)) && kombinacijeStringova.indexOf(jednaKombinacija) === -1) {
            kombinacijeStringova.push(jednaKombinacija)
        }
        jednaKombinacija = ''
      }
      
    return kombinacijeStringova.sort()
}

console.log(permutacijeStringa('abc'))
console.log(permutacijeStringa('abcd'))