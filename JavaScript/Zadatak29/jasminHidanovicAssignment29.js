// Izazov: Zbir cifara. Napišite funkciju koja uzima broj kao ulaz i računa
// zbir njegovih cifara koristeći petlju. Na primjer, ako je ulaz 123, funkcija
// treba vratiti 6 (1 + 2 + 3).

const sumaCifara = (broj) => {

    const brojUNiz = String(broj)
    let suma = 0

    for (let i = 0; i < brojUNiz.length; i++)
        suma += Number(brojUNiz[i])

    return suma
    // return String(broj).split('').reduce((suma, elem) => suma + Number(elem), 0)
} 

console.log(sumaCifara(123))
console.log(sumaCifara(45127))