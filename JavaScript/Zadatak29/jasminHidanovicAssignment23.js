// Napišite funkciju koja prihvata dvodimenzionalnu matricu kao ulaz i
// rotira je za 90 stepeni u smjeru kazaljke na satu. Funkcija treba
// izmijeniti proslijeđenu matricu i vratiti tu izmjenjenu matricu.
      
const rotirajZa90Stepeni = (nizZaRotiranje) => {

    const rotiraniNiz = []

    for (const elem of nizZaRotiranje)
        if (elem.length !== nizZaRotiranje[0].length || !Array.isArray(nizZaRotiranje)) 
            return 'Niste unijeli matricu'

    // Kreiramo novi niz koji ima dimenzije u zavisnosti od broja kolona
    for (let i = 0; i < nizZaRotiranje[0].length; i++) {
        rotiraniNiz[i] = []
    }

    // Od broja redova (j) pa sve do broja kolona (i) ubacujemo u novi niz po formuli
    for (let i = 0; i < nizZaRotiranje[0].length; i++)
        for (let j = 0; j < nizZaRotiranje.length; j++)
            rotiraniNiz[i][j] = nizZaRotiranje[nizZaRotiranje.length - j - 1][i]
    
    return rotiraniNiz
}

console.log(rotirajZa90Stepeni([['00', '01', '02'], ['10', '11', '12'], ['20', '21', '22']]))
console.log(rotirajZa90Stepeni([['00', '01'], ['10', '11'], ['20', '21']]))
console.log(rotirajZa90Stepeni([['1', '2', '3'], ['4', '5'], ['6']]))

// [00, 01, 02]      [20, 10, 00]
// [10, 11, 12]  =>  [21, 11, 01]
// [20, 21, 22]      [22, 12, 02]

// [00, 01]      [20, 10, 00]
// [10, 11]  =>  [21, 11, 01]
// [20, 21]     