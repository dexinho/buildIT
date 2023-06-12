// Razvijte JavaScript funkciju koja provjerava snagu lozinke na osnovu
// određenih kriterija kao što su dužina, prisustvo velikih i malih slova,
// brojeva i posebnih znakova. Implementirajte sistem bodovanja za
// ocjenu snage lozinke i prikažite rezultat kao izlaz.

const snagaLozinke = (lozinka) => {

    let velikoSlovo = false
    let maloSlovo = false
    let imaBroj = false
    let posebanZnak = false

    // Provjeravamo po ASCII tabeli. Zadnji uslov(posebni znakovi) radi tako sto smo pokrili sve ostale uslove
    for (const char of lozinka) {
        if (char >= 'a' && char <= 'z')
            maloSlovo = true
        else if (char >= 'A' && char <= 'Z')
            velikoSlovo = true
        else if (char >= '0' && char <= '9')
            imaBroj = true
        else 
            posebanZnak = true
    }

    return (lozinka.length>10) ? `Lozinka ${lozinka} ima ocjenu: ${1 + maloSlovo + velikoSlovo + imaBroj + posebanZnak }`
    :  `Lozinka ${lozinka} ima ocjenu: ${maloSlovo + velikoSlovo + imaBroj + posebanZnak}`
}

console.log(snagaLozinke('ChristopherLovesUs123!'))
console.log(snagaLozinke('slabasifra'))